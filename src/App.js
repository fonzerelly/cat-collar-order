import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {Intro} from './Intro/Intro'
import {OrderForm} from './OrderForm/OrderForm'
import {OrderReview} from './OrderReview/OrderReview'

function App() {
  return (
    <Router>
    
      <Switch>
        <Route path="/order">
          <OrderForm></OrderForm>
          <Link to="/review"><button>next</button></Link>
        </Route>
        <Route path="/review">
          <OrderReview></OrderReview>
        </Route>
        <Route path="/">
          <Intro></Intro>
          <Link to="/order"><button>next</button></Link>
        </Route>
    
      </Switch>
    </Router>
  );
}

export default App;
