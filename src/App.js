import logo from './logo.svg';
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
//     <div>

//     <Router>
//     <Header />
//     <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       <p>
//      Edit <code>src/App.js</code> and save to reload.
//       </p>
  
//       </header>
//     <Route path="/" exact component={Home}/>
//     <Route path="/work" component={Work} />
// </Router>
   
//      </div>

<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" exact component={Home} />
  <Route path="/work" component={Work} />
</Routes>
</BrowserRouter>
  );
}

export default App;
