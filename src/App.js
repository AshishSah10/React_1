
import CountDown from './components/CountDown/CountDown';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <CountDown startFrom = {10}/>
        <ProductList />
      </header>
    </div>
  );
}

export default App;
