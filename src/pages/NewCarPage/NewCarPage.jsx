import React, {Component} from 'react';

class NewCarPage extends Component {

fileUploaded = e => {
    console.log(e.target)
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