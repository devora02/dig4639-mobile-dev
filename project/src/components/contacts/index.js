import React from 'react'
import "./index.css"

const ContactList = ({ contacts }) => {

    return (
        <div className="contacts">
           
          <h2>Contacts</h2>
            {contacts.map((contact, i) => (
                <div key={i} className="card">
                    <div className="cardContent">
                        <p className="cardHeader">{contact.name}</p>
                        <p className="cardPara">{contact.number}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ContactList;