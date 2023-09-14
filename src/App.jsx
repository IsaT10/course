import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="max-w-screen-xl mx-3 md:mx-auto">
      <Header />
      <main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Cards />
        <Cart />
      </main>
    </div>
  );
}

export default App;
