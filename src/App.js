import './App.css';
import Home from './pages/Home';
import Work from './pages/Work';
import Header from './component/Header';
import styled from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Mark = styled.div `
width: 500px;
height: 500px;
background-image: url(../assets/logo1.png);
position: fixed;
bottom: 0;
z-index: 99999;
`



function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" index element={<Home />} />
  <Route path="/work" element={<Work />} />
</Routes>
<Mark />
</BrowserRouter>
  );
}

export default App;
