import Showcase from './Showcase';
import BaseStats from './BaseStats.js';
import './App.css';

const baseStats = {
  hp: 45,
  attack: 49,
  defense: 49,
  spAttack: 65,
  spDef: 65,
  speed: 45,
};

function App() {
  return (
    <div className='main-wrapper background'>
      <Showcase />
      <BaseStats />
    </div>
  );
}

export { baseStats } 
export default App;