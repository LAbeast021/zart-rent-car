import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch, Redirect} from 'react-router-dom';
import userService from '../../utils/userService';
import carService from '../../utils/carService';
import './App.css';
// //////////// PAGES and COMPONENTS  ///////////////////////////
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/navbar/NavBar';
import NewCarPage from '../NewCarPage/NewCarPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import DetailPage from '../DetailPage/Detail';
import HomePage from '../HomePage/HomePage'




class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
     
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

  handleAddCar = async (newCar) => {
    await carService.addCar(newCar);
    this.props.history.push('/profile')
  };
  // ///// MOUNT /////////////////
  


  // //////// RENDER /////////////////////////////
  render (){
    // console.log(this.state.user);
  return (
    <div className="App">

      <NavBar
      user= {this.state.user}
      handleLogout = {this.handleLogout}
      ></NavBar>
      {/* /* ///////////////// routers /////////////////////// */ }
      <Switch>
        <Route exact path='/' render={({ history }) => 
              this.state.user ? 
                <HomePage user={this.state.user} />
                :
                <div style={{
                  width:'50%',
                  // marginLeft:'25%',
                  border:'2px solid grey',
                  borderRadius:'15px',
                  boxShadow:'0 0  8px grey'
                }}>
                <h1 > Welcome to zart buy zart sell</h1>
                <hr />
                <h3> A place where you can easily sell or buy cars </h3>
                <hr />
                <h3> If you Have an account login if not create an account to start</h3>
                </div>
                
            }/>
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
        >
        <Route exact path='/profile' render= {()=> 
          <ProfilePage 
          user = {this.state.user}
          />
        }>
        </Route>
        <Route exact path='/detail/:value' render= {({match,history})=> 
          <DetailPage 
          user = {this.state.user}
          match={match}
          history={history}
          />
        }>
        </Route>

        
        </Switch>
    </div>
  );
}
}

export default App;
