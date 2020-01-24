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
                            <div className={styles.data}>
                                <h4> Brand : {post.brand}</h4>
                                <h4> Model : {post.model}</h4>
                                <h4> Year : {post.year}</h4>
                                <h4> # of seats : {post.seats}</h4>
                                <h4> Exterior Color : {post.exColor}</h4>
                                <h4> Interior Color : {post.intColor}</h4>
                                <h4> Condition : {post.condition}</h4>
                                <h4> Engine Type : {post.engine}</h4>
                                <h4> Milage on Car : {post.milage}</h4>
                                <h4> Price: {post.price} $</h4>
                            </div>
                            <div className={styles.requests}>
                                <h2> {post.comments.length} Person Intrested in your car</h2>
                            </div>
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