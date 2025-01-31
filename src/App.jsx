import AuthComponent from './components/AuthComponent';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <main className="app">
          <AuthComponent
            mode='login'
          />
      </main>
    </AuthProvider>
  );
}

export default App;