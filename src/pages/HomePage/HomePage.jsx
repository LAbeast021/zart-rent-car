import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './HomePage.module.css';

const BASE_URL = '/api/posts';



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
            posts:data
          })
        })
      };

    render (){
        return (
            <>
            {this.state.posts.map ( (post,idx) =>{
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
                } ) 
                }
        </>
        )
    }
};


export default HomePage;