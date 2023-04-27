import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import Create from './component/Create'
import Signup from './component/Signup'

function App() {
  return (
    <div >
    <BrowserRouter>

<Routes>

<Route path="/Home" element = {<Home/>} />
<Route path="/create" element = {<Create/>} />

<Route path="/" element = {<Signup/>} />

</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
