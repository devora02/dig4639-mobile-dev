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
            <h1>Create a new contact!</h1>
            <form className="formContainer" method="POST"> 
                <div className="inputItems">
                <label htmlFor="nameInput">Name:</label>
                <input type="text" id="nameInput" name="nameInput">
                </input><br/>
                <label htmlFor="numberInput">Number:</label>
                <input type="text" id="numberInput" name="numberInput"></input>
                <button type="submit" onClick={this.props.createContact}>Create Contact</button>
                </div>
            </form>
        </div>
    );
}
}

export default AddContact;