import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Addstudent from './components/Addstudent';
import Viewstud from './components/Viewstud';


function App() {
  return (
    <div className="App">
      <Navbar/>
     {/* <Addstudent/> */}
      <Routes>
        <Route path='/addstud' element={<Addstudent method="post" data={{id:"0",name:"",age:""}}/>}/>
        <Route path='/viewstud' element={<Viewstud/>}/>
     </Routes>
   </div>
  );
}

export default App;
