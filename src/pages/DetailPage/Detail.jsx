import React,{Component} from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
import styles from './Detail.module.css';
const BASE_URL = '/api/posts/';

class DetailPage extends Component {
state = {
    post:{
        pictures:[],
        comments:[]
    },
    comment:'',
    sent:false
}


async componentDidMount(){
    console.log('an shoooood')
    return fetch(BASE_URL + 'detail/' + this.props.match.params.value)
    .then( res => {
        return res.json()
    })
    .then( async (data) => {
        this.setState ( {
            post:data,
            
        })
    })
};


// /////// Handler /////////////


changeHandler = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })

};
  deleteComment = async (id,idx) => {
    return await fetch(BASE_URL + 'deleteComment/' + id +'/' + idx , {
        method : 'get',
        headers: {'content-type': 'application/json'}
    })
    .then (res => {
        res.json()
         this.componentDidMount()
    })
 }
 sendComment = async () => {
    return await fetch(BASE_URL  + 'addComment/' + this.state.post._id,{
        method:'post',
        headers: {'content-type': 'application/json'},
        body:JSON.stringify({
            userId:this.props.user._id,
            username:this.props.user.username,
            comment:this.state.comment
        })
    })
    .then (res => {
        res.json()
        this.setState({
            comment:'',
            sent:this.sentM()
            
        })
        this.componentDidMount()
        //  this.props.history.push('/detail/' + this.state.post._id)
    })
};
sentM = () => {
    this.state.post.comments.forEach( (com) => {
        if (this.props.user._id === com.userId) return true
        else return false
    })
}

    render(){
        return(
           <>
           <div className={styles.imageHolder}>
               { this.state.post.pictures.length ? this.state.post.pictures.map((pic,idx) => {
                   return (
                        <img style={{border: '3px solid rgb(8, 77, 117)'}} key={idx} src={pic} alt=""/>
                   )
               })
            :
            <h3>no image uploaded</h3>
            }
           </div>
            <div className={styles.postContainer}>
                
                <div className={styles.informationContainer}>
                <h4> Brand : {this.state.post.brand}</h4>
                <h4> Model : {this.state.post.model}</h4>
                <h4> Year : {this.state.post.year}</h4>
                <h4> # of seats : {this.state.post.seats}</h4>
                <h4> Exterior Color : {this.state.post.exColor}</h4>
                <h4> Interior Color : {this.state.post.intColor}</h4>
                <h4> Condition : {this.state.post.condition}</h4>
                <h4> Engine Type : {this.state.post.engine}</h4>
                <h4> Milage on Car : {this.state.post.milage}</h4>
                <h4> Price: {this.state.post.price} $</h4>
                </div>
            </div>


            {this.state.post.sellerId === this.props.user._id ? 
                <div>
                    {this.state.post.comments.length ? 
                        <div className={styles.messageHolder}>
                            {this.state.post.comments.map( (com,idx) => {
                          return(  <div className={styles.message} key={idx}><h3> {com.username} : {com.comment}</h3> <button onClick={()=> {this.deleteComment(this.state.post._id,idx)}}>delete comment</button></div>)
                            })}
                        </div>
                        :
                        <h1>No Message Yet</h1>
                    }
                </div>
                :
                <div>
                    {this.state.sent ? 
                       <div> <h3><span style={{color:'green',fontSize:'30px'}}>◷</span> Your Request has been sent to the owner; they will contact you as soon as they can  ☺ </h3></div>
                        :
                        <div>
                            <h3> Are you interested in this car ? state your first and last name with a contact information and they will reach  you as soon as they can ☺</h3>
                            <input style={{width:'30%',height:'50px',border:'2px solid',fontSize:'20px',marginTop:'1%'}} type="text" name='comment' value={this,this.state.comment} onChange={this.changeHandler} placeholder='type your information here ▼ '/>
                            <button className={styles.button} style={{height:'40px'}}
                         onClick={this.sendComment}>Send your information ➲ </button>
                        </div>
                    }
                </div>
            
            }
        
           </>
        )
    }
}



export default DetailPage;