
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import LoginContainer from './containers/loginContainer';

function App() {
  return(
<Provider store={store}>
    <LoginContainer/>
   </Provider>
  )

}

export default App;
