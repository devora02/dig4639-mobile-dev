import React from "react";
import './index.css'

function AddContact(props) {
    return (
        <div>
            <h1>Create a new contact!</h1>
            <form className="formContainer" method="POST"> 
            <div className="inputItems">

            <label for="nameInput">Name:</label>
            <input type="text" id="nameInput" name="nameInput">

            </input><br/>

            <label for="numberInput">Number:</label>
            <input type="text" id="numberInput" name="numberInput"></input>

            <button type="submit" onClick={props.createContact}>Create Contact</button>
            </div>
            </form>
        </div>
    );
}

export default AddContact;