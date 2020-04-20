import React from 'react'
import "./index.css"

class ContactList extends React.Component{

    render(){
    return (
        <div className="contacts">
           
          <h2>Contacts</h2>
            {this.props.contacts.map((contact, i) => (
                <div key={i} className="card">
                    <div className="cardContent">
                        <p className="cardHeader">{contact.name}</p>
                        <p className="cardPara">{contact.number}</p>
                    </div>
                    <button onClick={this.props.deleteContact.bind(null, contact)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
}

export default ContactList;