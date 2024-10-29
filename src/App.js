import ProductList from "./components/ProductList/ProductList";
import './App.css';
import {useEffect} from "react";
import {Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header.jsx";
function App() {
  // useEffect(()=>{
  //   tg.ready();
  // },[]);
  window.addEventListener("scroll", function() {
    window.scrollTo(0, window.scrollY); 
});

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route index element = {<ProductList />}/>
      </Routes>
    </div>
  );
}

export default App;
