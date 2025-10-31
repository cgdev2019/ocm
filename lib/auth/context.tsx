'use client';

import { createContext, useContext } from 'react';

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated' | 'error';

export type AuthUser = {
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  roles: string[];
};

export type AuthContextValue = {
  status: AuthStatus;
  user: AuthUser | null;
  token: string | null;
  login: () => void;
  logout: () => void;
};

const defaultValue: AuthContextValue = {
  status: 'loading',
  user: null,
  token: null,
  login: () => undefined,
  logout: () => undefined,
};

export const AuthContext = createContext<AuthContextValue>(defaultValue);

export const useAuth = () => useContext(AuthContext);
