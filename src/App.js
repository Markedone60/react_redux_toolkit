import './App.css';
import { Provider } from 'react-redux';
import StarWarsFacts from './components/StarWars/StarWarsFacts';
import store from './redux/store';
import ProfileLogic from './components/Profile/ProfileLogic';

function App() {
  return (
    <Provider store={store}>
      <div className='divider'>Task 1</div>
      <StarWarsFacts />
      <div className='divider'>Task 2</div>
      <ProfileLogic />
    </Provider>
  );
}

export default App;

