'use client';

import { PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
import Keycloak, { type KeycloakInstance } from 'keycloak-js';
import { env } from '@/lib/config/env';
import { AuthContext, type AuthUser } from '@/lib/auth/context';
import { setAccessToken, setRefreshToken } from '@/lib/auth/token-store';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const keycloakRef = useRef<KeycloakInstance | null>(null);
  const mockUser: AuthUser | null = env.mockApi
    ? {
        username: 'mock.user',
        firstName: 'Mock',
        lastName: 'User',
        email: 'mock.user@example.com',
        roles: ['admin'],
      }
    : null;
  const mockToken = env.mockApi ? 'mock-token' : null;

  const [token, setToken] = useState<string | null>(() => mockToken);
  const [user, setUser] = useState<AuthUser | null>(() => mockUser);
  const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated' | 'error'>(
    env.mockApi ? 'authenticated' : 'loading',
  );

  useEffect(() => {
    if (env.mockApi) {
      setAccessToken(mockToken);
      setRefreshToken(mockToken);
      return;
    }

    if (typeof window === 'undefined') {
      return;
    }

    const keycloak = new Keycloak({
      url: env.keycloak.url,
      realm: env.keycloak.realm,
      clientId: env.keycloak.clientId,
    });
    keycloakRef.current = keycloak;

    let isMounted = true;

    keycloak
      .init({
        onLoad: 'check-sso',
        pkceMethod: 'S256',
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
      })
      .then((authenticated) => {
        if (!isMounted) {
          return;
        }

        if (!authenticated) {
          setStatus('unauthenticated');
          keycloak.login();
          return;
        }

        const kcToken = keycloak.token ?? null;
        const kcRefresh = keycloak.refreshToken ?? null;
        setAccessToken(kcToken);
        setRefreshToken(kcRefresh);
        setToken(kcToken);
        const profile: AuthUser = {
          username: keycloak.tokenParsed?.preferred_username ?? 'user',
          email: keycloak.tokenParsed?.email,
          firstName: keycloak.tokenParsed?.given_name,
          lastName: keycloak.tokenParsed?.family_name,
          roles: Array.isArray(keycloak.tokenParsed?.realm_access?.roles)
            ? (keycloak.tokenParsed?.realm_access?.roles as string[])
            : [],
        };
        setUser(profile);
        setStatus('authenticated');
      })
      .catch(() => {
        if (!isMounted) {
          return;
        }
        setStatus('error');
      });

    const refreshInterval = window.setInterval(() => {
      if (!keycloak.authenticated) {
        return;
      }

      keycloak
        .updateToken(60)
        .then((refreshed) => {
          if (!refreshed) {
            return;
          }
          const refreshedToken = keycloak.token ?? null;
          setAccessToken(refreshedToken);
          setRefreshToken(keycloak.refreshToken ?? null);
          setToken(refreshedToken);
        })
        .catch(() => keycloak.login());
    }, 30_000);

    return () => {
      isMounted = false;
      window.clearInterval(refreshInterval);
      keycloak.clearToken();
      setAccessToken(null);
      setRefreshToken(null);
    };
  }, [mockToken]);

  const value = useMemo(
    () => ({
      status,
      user,
      token,
      login: () => keycloakRef.current?.login(),
      logout: () => keycloakRef.current?.logout({ redirectUri: window.location.origin }),
    }),
    [status, token, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
