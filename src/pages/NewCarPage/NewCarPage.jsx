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
            <h1>Add Your Car for sale</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <input type="file" onChange={this.fileUploaded} />
        </form>
            </>
        )
    }
};



export default NewCarPage;