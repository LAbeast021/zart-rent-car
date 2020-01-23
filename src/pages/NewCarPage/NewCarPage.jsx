import React, {Component} from 'react';
import axios from 'axios';
import multer from 'multer';
var formData = new FormData();

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
        engine:'',
        milage:'',
        price:''
    }

handleFileUpload = e => {
    formData.delete('images')
    for (let i = 0; i < e.target.files.length; i++) {
        formData.append('images', e.target.files[i]);
    }
    

};
handleChange = e => {
    this.setState({
         [e.target.name] : e.target.value,
    })
};
saveTheCar = async (e) => {
    e.preventDefault(); 
    formData.delete('carInformation');
    await formData.append('carInformation' , JSON.stringify(this.state))
    this.props.handleAddCar(formData);
};

    render () {
        return (
            <>
            <h1>Add Your Car for sale &nbsp;&nbsp;&nbsp;<p>(you wont be able to change later)</p></h1>
            <input type="text" name="brand" value={this.state.brand} placeholder="Enter the Brand"  onChange={this.handleChange}/>
            <input type="text" name="model" value={this.state.model} placeholder="Enter the Model" onChange={this.handleChange}/>
            <input type="text" name="year" value={this.state.year} placeholder="Enter the year" onChange={this.handleChange}/>
            <input type="text" name="seats" value={this.state.seats} placeholder="Enter the Number of Seats" onChange={this.handleChange}/>
            <input type="text" name="condition" value={this.state.condition} placeholder="state the condition" onChange={this.handleChange}/>
            <input type="text" name="exColor" value={this.state.exColor} placeholder="Enter Exxterior Color" onChange={this.handleChange}/>
            <input type="text" name="intColor" value={this.state.intColor} placeholder="Enter Interior Color" onChange={this.handleChange}/>
            <input type="text" name="engine" value={this.state.engine} placeholder="Enter engine type" onChange={this.handleChange}/>
            <input type="text" name="milage" value={this.state.milage} placeholder="Enter milage on the car" onChange={this.handleChange}/>
            <input type="text" name="price" value={this.state.price} placeholder="How Much ??" onChange={this.handleChange}/>
            <input type="file" multiple name="images" onChange={this.handleFileUpload} />
            <button onClick={this.saveTheCar} > Add the car </button>
           
               
            </>
        )
    }
};



export default NewCarPage;