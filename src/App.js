
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import Home from './components/Home';
import UsersList from './components/UsersList';


function App() {
  
  return (
    <div className="App">
       <ul style={{display:"flex", justifyContent:"space-around"}}>
    <Link to={"/"}><li> Home </li>  </Link>
    <Link to={"/user"}><li> Users </li>  </Link>
      </ul>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<UsersList/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </div>
  );
}

export default App;
