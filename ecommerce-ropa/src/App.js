import './App.css';
import Navbar from './components/Navbar';
import CheckoutPage from './components/CheckoutPage';
//import Product from './components/Product';
import Products from './components/Products';
//import CheckoutCard from './components/CheckoutCard';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar />
       <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/checkout-page">
          <CheckoutPage />
        </Route>
        <Route path="/">
          <Products />
        </Route>
       </Switch>
      </div>
    </Router>
    
    
    
    
    
    
    
    
    
    
    
  );
}

export default App;
