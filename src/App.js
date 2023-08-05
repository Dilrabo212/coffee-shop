
import { Header } from './component/Header/header'
import { MainSection } from './component/Main/mainSection'
import { CardSection } from './component/Card/CardSection';
import Next from './component/Next/next';
import { Price } from './component/Price/price'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainSection />
        <CardSection />
        <Next />
        <Price />
      </header>
    </div>
  );
}

export default App;

