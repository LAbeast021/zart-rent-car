import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import styles from './NavBar.module.css';


class NavBar extends Component {
    render (){
        return (
            <div className={styles.NavBar}>
                {this.props.user ?  
                    <div className={styles.logout}>
                    <div className={styles.text}>
                   <h4> welcome {this.props.user.first_name} </h4>
                   </div>
                    <div className={styles.navCom}>
                    <Link to='/sellCar'> Sell your Car</Link>
                    </div>
                    <div className={styles.navCom}>
                    <Link to='/profile'> Your Account</Link>
                    </div>
                   <div className={styles.navCom}>
                    <Link to='/'> Buy a Car</Link>
                    </div>
                    <div className={styles.navCom} style = {{
                        borderRight : "none",
                    }}>
                    <Link to=''  className='NavBar-link' onClick={this.props.handleLogout} >LOG OUT</Link>
                    </div>
                    </div>  
                        :  
                    <div className={styles.logout}>
                        <div className={styles.notuser}> 
                            <div style={{
                                borderRight : '2px solid black',
                                width: '50%'
                            }}>
                                <Link style={{marginLeft:'2%'}} to='login'> LOGIN</Link>
                            </div>
                            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
                        </div>
                    <hr></hr>
                    </div> 
                }           
            </div>
        );
    }
}

export default NavBar;
