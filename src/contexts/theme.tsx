import {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
  PropsWithChildren,
} from 'react';

import { LocalStorageService } from 'service/local-storage';

type ThemeState = 'dark' | 'light';

type ThemeConcext = {
  theme: ThemeState;
  toggleTheme(): void;
};

const ThemeContext = createContext<ThemeConcext | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [theme, setTheme] = useState<ThemeState>(() => {
    const storedTheme = LocalStorageService.getItem<ThemeState>('theme');
    return storedTheme ?? 'light';
  });

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';

      LocalStorageService.setItem('theme', newTheme);

      return newTheme;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeConcext => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`useTheme must be used within an ThemeProvider`);
  }

  return context;
};
