import './App.css';
import Home from './components/Home'
import AuthKey from './components/AuthKey'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <AuthKey />
      <Home />
    </div>
  );
}

export default App;
