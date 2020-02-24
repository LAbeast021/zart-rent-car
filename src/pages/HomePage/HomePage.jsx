import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './HomePage.module.css';

const BASE_URL = '/api/posts/';



class HomePage extends Component {

    state = {
        posts : []
    }
    async componentDidMount (){
        return await fetch(BASE_URL)
        .then(res => {
          return res.json()
        })
        .then( data => {
          this.setState({
            posts:data.reverse()
          })
        })
      };

    render (){
        return (
            <div className={styles.homebody}>
            {this.state.posts.map ( (post,idx) =>{
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
                                        <h2> Add to Favorite</h2>
                                    </div>
                                </div>
                            </div>
                    </Link>
                        )
                } ) 
                }
        </div>
        )
    }
};


export default HomePage;