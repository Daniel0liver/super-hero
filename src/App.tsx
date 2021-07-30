import { AuthProvider } from 'contexts/auth';

import Routes from 'routes';

import GlobalStyles from 'styles/global';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
};

export default App;
