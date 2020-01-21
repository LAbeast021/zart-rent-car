import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch, Redirect} from 'react-router-dom';
import userService from '../../utils/userService';
import './App.css';
// //////////// PAGES ///////////////////////////
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }
  // //////////// Handlers //////////////////////
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  render (){
    console.log(this.state.user);
  return (
    <div className="App">
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        <hr></hr>
        <Link to='/login' className='NavBar-link'>Log in </Link>
      <Switch>
        <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
    </div>
  );
}
}

export default App;
