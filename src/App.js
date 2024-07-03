import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Myaccount from './Components1/Myaccount/myaccount';
import Signout from './Components1/Signout/signout';
import Customercare from './Components1/CustomerCare/customercare';
import Visit from './Components1/Visitluxe/visit';
// import Compo2 from './Components2/component2';
import Men from '../src/Components2/Men/men'
import Women from '../src/Components2/Women/women'
import Kids from '../src/Components2/Kids/kids'
import Beauty from '../src/Components2/Beauty/beauty'
import Home from '../src/Components2/Home&kitchen/home&kitchen'
import WishList from '../src/Components2/Wishlist/wishlist'
import Cart from '../src/Components2/Cart/cart'
import Search from './Search/search';
import TheMain from './TheMain/themaincom';
function App() {
  return (
    <>
      <BrowserRouter>
   
        <Routes>
          <Route path='/search' element={<Search/>}>
   
          </Route>
          <Route path='/' element={<TheMain/>}></Route>
          <Route path='/myaccount' element={<Myaccount />}></Route>
          <Route path='/signout' element={<Signout/>}></Route>
          <Route path='/customercare' element={<Customercare />}></Route>
          <Route path='/visit' element={<Visit />}></Route>
          {/* <Route path='component2' element={<Compo2/>}></Route> */}
          <Route path='/men' element={<Men/>}> </Route>
                  <Route path='/women' element={<Women/>}></Route>
                  <Route path='/kids' element={<Kids/>}></Route>
                  <Route path='/beauty' element={<Beauty/>}></Route>
                  <Route path='/homekitchen' element={<Home/>}></Route>
                  <Route path='/wishlist' element={<WishList/>}></Route>
                <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}


export default App;
