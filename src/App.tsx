import { ThemeProvider } from 'styled-components';

import { AuthProvider } from 'contexts/auth';
import { useTheme } from 'contexts/theme';

import Routes from 'routes';

import GlobalStyles from 'styles/global';
import * as themes from 'styles/theme';

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={themes[theme]}>
      <AuthProvider>
        <GlobalStyles />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
