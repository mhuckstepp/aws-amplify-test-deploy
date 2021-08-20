import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


const signIn = () => {
  console.log('signinFunc');
}
function App() {
  return (
    <div className="App">
      <p>App</p>
      <button onClick={signIn}></button>
      <h1>We now have Auth!</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
