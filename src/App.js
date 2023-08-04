
import { Header } from './component/Header/header'
import { MainSection } from './component/Main/mainSection'
import { CardSection } from './component/Card/CardSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainSection />
        <CardSection />
      </header>
    </div>
  );
}

export default App;

