
import { Header } from './component/Header/header'
import { MainSection } from './component/Main/mainSection'
import { CardSection } from './component/Card/CardSection';
import Next from './component/Next/next';
import { Price } from './component/Price/price'
import { Coffee } from './component/Coffe/coffee'
import Best from './component/Best/best'
import Customer from './component/Customer/customer';
import Map from './component/Map/map';
import Blog from './component/Blog/blog';
import Futter from './component/Futter/futter';



function App() {
  return (
    <div className="App">

      <Header />
      <MainSection />
      <CardSection />
      <Next />
      <Price />
      <Coffee />
      <Best />
      <Customer />
      <Map />
      <Blog />
      <Futter />
    </div>
  );
}

export default App;

