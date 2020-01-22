import React, {Component} from 'react';
import axios from 'axios'

class NewCarPage extends Component {
    state = {
        brand:'',
        model:'',
        year:'',
        seats:'',
        condition:'',
        pictures: [],
        sellerId: this.props.user._id,
        sellerUsername: this.props.user.username,
        exColor:'',
        intColor:'',
        engine:''
    }

fileUploaded = e => {
    console.log(e.target.files[0].__proto__)
};

    render () {
        return (
            <>
            <h1>Add Your Car for sale &nbsp;&nbsp;&nbsp;<p>(you wont be able to change later)</p></h1>
            <input type="text" name="brand" value={this.state.b}/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
               
            </>
        )
    }
};



export default NewCarPage;