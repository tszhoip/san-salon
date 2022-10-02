import './App.css';
import Home from './pages/Home';
import Work from './pages/Work';
import Header from './component/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" index element={<Home />} />
  <Route path="/work" element={<Work />} />
</Routes>
</BrowserRouter>
  );
}

export default App;
