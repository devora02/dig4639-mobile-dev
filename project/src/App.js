import React from 'react';
import './App.css';
import Accprofile from "./components/Accprofile"
import ContactList from "./components/contacts"
import AddContact from "./components/addcontact";

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        contacts: [],
        profile: [],
        number: [],
      };

      this.nameRef= React.createRef();
      this.numberRef= React.createRef();
  }

  componentDidMount(){
    window.fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "devora"}})
    .then((res) => res.json())
    .then((data) => {this.setState({contacts: data.contacts});
    });
    this.showProfile();
  }

  addContact = event => {
    event.preventDefault();

    const name = document.getElementById("nameInput").value;
    const number = document.getElementById("numberInput").value;

    window.fetch("http://plato.mrl.ai:8080/contacts/add", {
      method: "POST",
      headers: {
        "API": "devora",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        number: number
      })
    })
      .then(this.addContact())
      .catch(err => {
        console.log(err);
      });

      document.getElementById("nameInput").value= "";
      document.getElementById("numberInput").value= "";
  };

  newUpdate(){
    this.showNewContact();
    this.showProfile();
  }

  showProfile = () => {
    window.fetch("http://plato.mrl.ai:8080/profile", {
      "method": "GET",
      "headers": {
        "API": "devora"
      }
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({profile: data})
    })
    .catch(console.log("Person is not added"))
  }

  showContactList = () => {
    window.fetch("http://plato.mrl.ai:8080/contacts", {
      "method": "GET",
      "headers": {
        "API": "devora"
      }
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts})
    })
    .catch(console.log("Cannot get contact list!"))
  }

  render() {
    return (
      <div className="contactApp">
        <Accprofile profile={this.state.profile} />
        <ContactList contacts={this.state.contacts} />
        <AddContact createContact={this.addContact}/>
      </div>
    );
  }

}

export default App;
