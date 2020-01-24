import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styles from './Detail.module.css';
const BASE_URL = '/api/posts/';

class DetailPage extends Component {
state = {
    post:{
        pictures:[]
    }
}


async componentDidMount(){
    return fetch(BASE_URL + 'detail/' + this.props.match.params.value)
    .then( res => {
        return res.json()
    })
    .then( data => {
        this.setState ( {
            post:data
        })
    })
};

    render(){
        return(
           <>
           <div className={styles.imageHolder}>
               { this.state.post.pictures.length ? this.state.post.pictures.map((pic,idx) => {
                   return (
                        <img key={idx} src={pic} alt=""/>
                   )
               })
            :
            <h3>no image uploade</h3>
            }
           </div>
            <div className={styles.postContainer}>
                
                <div className={styles.informationContainer}>
                    <h1> ${this.state.post.price} </h1>
                </div>
            </div>
        
           </>
        )
    }
}



export default DetailPage;