import * as React from 'react';

import MainContainer from './src/navigation/MainContainer';
import { AuthProvider } from './src/Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <MainContainer />
    </AuthProvider>
  );
}
export default App;