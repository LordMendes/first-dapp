import './App.css';
import { GameContainer } from './components/GameContainer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GameContainer>
        </GameContainer>
      </Provider>
    </div>
  );
}

export default App;
