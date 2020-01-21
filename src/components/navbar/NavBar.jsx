import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import styles from './NavBar.module.css';


class NavBar extends Component {
    render (){
        return (
            <div className={styles.NavBar}>
                {this.props.user ?  
                    <div className={styles.logout}>
                    <Link to='/profile'> Your Account</Link>
                    <Link to='/sellCar'> Sell your Car</Link>
                   <h1> welcome {this.props.user.first_name} </h1>
                    |
                    <Link to=''  className='NavBar-link' onClick={this.props.handleLogout} >LOG OUT</Link>
                    </div>  
                        :  
                    <div>
                    <Link to='login'> LOGIN</Link> } 
                    <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
                    <hr></hr>
                    </div> 
                }           
            </div>
        );
    }
}

export default NavBar;
