import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch, Redirect} from 'react-router-dom';
import userService from '../../utils/userService';
import './App.css';
// //////////// PAGES and COMPONENTS  ///////////////////////////
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/navbar/NavBar';
import NewCarPage from '../NewCarPage/NewCarPage';


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
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleAddCar = (newCar) => {
    console.log('add car ')
  }


  // //////// RENDER /////////////////////////////
  render (){
    console.log(this.state.user);
  return (
    <div className="App">

      <NavBar
      user= {this.state.user}
      handleLogout = {this.handleLogout}
      ></NavBar>
      {/* /* ///////////////// routers /////////////////////// */ }
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
          <Route exact path='/sellCar' render={() => 
            <NewCarPage 
            handleAddCar={this.handleAddCar}
            user = {this.state.user}
            />

        }></Route>
        </Switch>
    </div>
  );
}
}

export default App;
