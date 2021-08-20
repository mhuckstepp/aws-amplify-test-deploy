import logo from './logo.svg';
import './App.css';
const signIn = () => {
  console.log('signinFunc');
}
function App() {
  return (
    <div className="App">
      <p>App</p>
      <button onClick={signIn}></button>
    </div>
  );
}

export default App;
