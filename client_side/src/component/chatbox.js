import React, { Component } from "react";
import axios from "axios";

import './chatbox.css';

export default class chatBox extends Component {
  constructor(props) {
    super(props);

   

    this.state = {
     
      email: "",
      emailClient:"client@gmail.com",      
      text: "",
      
    };
  }

 

  onChangeText=(e) =>{
    this.setState({
      text: e.target.value,
    });
  }
  onChangeEmail=(e) =>{
    this.setState({
      email: e.target.value,
    });
  }
  onChangeEmailClient=(e) =>{
    this.setState({
      emailClient: e.target.value,
    });
  }

  submit=(e)=> {
    e.preventDefault();
    
    const message = {
      
      emailClient: this.state.email,
      emailClientCustomer: this.state.emailClient,
      message: this.state.text,
     
    };

    

    axios
      .post("http://localhost:4000/message/clientCustomerMessage", message)
      .then((res) => console.log(res.data));
   
  }

  render() {
    return (
        <>
        
        <input type="email" placeholder={this.state.email} onChange={this.onChangeEmail} required/>
        <input type="email" placeholder={this.state.emailClient} onChange={this.onChangeEmailClient} required/>
        <div className="chatbox">
    		<div className="chatlogs">
			<div className="chat friend">
				<div className="user-photo"></div>
				<p className="chat-message">Hi</p>	
			</div>
			<div className="chat friend">
				<div className="user-photo"></div>
				<p className="chat-message">What's up?</p>	
			</div>
			<div className="chat self">
				<div className="user-photo"></div>
				<p className="chat-message">Hi, nothing much</p>	
			</div>
			<div className="chat self">
				<div className="user-photo"></div>
				<p className="chat-message">What's up?</p>	
			</div>
			<div className="chat friend">
				<div className="user-photo"></div>
				<p className="chat-message">
				Nothing much
				</p>	
			</div>
		</div>
		<div className="chat-form">
    <textarea  onChange={this.onChangeText} >{this.state.text}</textarea>
			<button onClick={this.submit}>Send</button>
		</div>
	</div>
    </>
    );
  }
}
