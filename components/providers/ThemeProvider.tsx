'use client';

import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

const STORAGE_KEY = 'opencell-theme-mode';

export type ThemeMode = 'light' | 'dark';

type ThemeContextValue = {
  mode: ThemeMode;
  toggle: () => void;
};

const ThemeModeContext = createContext<ThemeContextValue>({ mode: 'light', toggle: () => undefined });

const designTokens = (mode: ThemeMode) =>
  createTheme({
    cssVariables: true,
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#045597' : '#4dabf5',
      },
      secondary: {
        main: mode === 'light' ? '#ea4c46' : '#ef9a9a',
      },
      background: {
        default: mode === 'light' ? '#f3f6fb' : '#0f141d',
        paper: mode === 'light' ? '#ffffff' : '#131a24',
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: { fontSize: '2.25rem', fontWeight: 600 },
      h2: { fontSize: '1.75rem', fontWeight: 600 },
      h3: { fontSize: '1.5rem', fontWeight: 600 },
      subtitle1: { fontWeight: 500 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 10,
            fontWeight: 600,
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: 12,
            border: mode === 'light' ? '1px solid #e0e7f1' : '1px solid rgba(255,255,255,0.08)',
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#ecf2fb' : '#1b2330',
          },
        },
      },
    },
  });

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const saved = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (saved === 'light' || saved === 'dark') {
      window.setTimeout(() => setMode(saved), 0);
    } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      window.setTimeout(() => setMode('dark'), 0);
    }
  }, []);

  const toggle = () => {
    setMode((current) => {
      const next = current === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, next);
      }
      return next;
    });
  };

  const theme = useMemo(() => designTokens(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggle }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
