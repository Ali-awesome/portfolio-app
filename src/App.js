import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Shared/Navbar'
import Contact from './Component/Contact/Contact';
import Detail from './Component/Detail/Detail';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Footer from './Component/Shared/Footer';
import Blogs from './Component/Blogs/Blogs';

function App() {
  return (
    <div className="App font-[gintronic] bg-[#0c0c0c]">

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/detail/:id' element={<Detail></Detail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
