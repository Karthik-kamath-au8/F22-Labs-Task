import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import SigninForm from './Components/Form';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Route exact path="/" component={Header}/>
      <Route  path="/form" component={SigninForm}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
