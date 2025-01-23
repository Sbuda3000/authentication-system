import AuthComponent from './components/AuthComponent';

const App = () => {
  return (
    <main className="app">
      <AuthComponent
        mode='login'
      />
    </main>
  );
}

export default App;