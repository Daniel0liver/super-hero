import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from 'react';
import { LocalStorageService } from 'service/local-storage';

type Account = {
  name: string;
};

type AuthState = {
  signed: boolean;
  account: Account;
};

type AuthContext = {
  signed: boolean;
  account: Account;
  signIn(name: string): void;
  signOut(): void;
};

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [data, setData] = useState<AuthState>(() => {
    const userName = LocalStorageService.getItem<string>('name');

    if (userName) {
      return {
        signed: true,
        account: { name: userName },
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback((name: string) => {
    LocalStorageService.setItem('name', name);
    setData({
      signed: true,
      account: { name },
    });
  }, []);

  const signOut = useCallback(() => {
    setData({
      signed: false,
      account: { name: '' },
    });
  }, []);

  const value: AuthContext = useMemo(
    () => ({
      signed: data.signed,
      account: data.account,
      signIn,
      signOut,
    }),
    [data, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }

  return context;
};
