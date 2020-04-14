import React from "react";
import './index.css'

class AddContact extends React.Component {
    submitContact(e) {
        console.log(e)
        e.preventDefault()
    }
    
    render() {
        return (
            <div>
            <form className="formContainer" method="POST"> 
            <h1>Create a new contact!</h1>
                <div className="inputItems">
                <label htmlFor="nameInput">Name:</label><br/>
                <input type="text" id="nameInput" name="nameInput">
                </input><br/>
                <label htmlFor="numberInput">Number:</label><br/>
                <input type="text" id="numberInput" name="numberInput"></input><br/>

                <button type="submit" onClick={this.props.createContact}>Create Contact</button>
                </div>
            </form>
        </div>
    );
}
}

export default AddContact;