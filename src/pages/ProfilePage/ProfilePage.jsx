import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styles from './Profile.module.css';

const BASE_URL = '/api/posts/';



class ProfilePage extends Component {

    state = {
        userPosts: [],
    }
    async componentWillMount(){
        return await fetch (BASE_URL + 'userPosts/' + this.props.user._id, {
            method : 'get',
        }).then ( res => {
            return res.json()
        }).then(data =>{
            this.setState({
                userPosts:data.reverse()
            })
        })
    };


    render (){
        console.log(this.state.userPosts);
        return(
        <>
            {this.state.userPosts.length ? this.state.userPosts.map ( (post,idx) =>{
                return (
                <Link key={idx} className={styles.link} to={'/detail/' + post._id} >
                    <div className={styles.postContainer}>
                        <img className={styles.image}  src={post.pictures[0]} alt=""/>
                        <div className={styles.informationContainer}>
                            <h1> ${post.price} </h1>
                        </div>
                    </div>
                </Link>
                    )
                } ) :
                <h1> No cars yet :(</h1>
                }
        </>
        )}
};


export default ProfilePage;