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
      
      email: this.state.email,
      email: this.state.emailClient,
      text: this.state.text,
     
    };

    

    axios
      .post("http://localhost:5001/message/add", message)
      .then((res) => console.log(res.data));
   
  }

  render() {
    return (
        <>
        
        <input type="email" placeholder={this.state.email} onChage={this.onChangeEmail} required/>
        <input type="email" placeholder={this.state.emailClient} onChage={this.onChangeEmailClient} required/>
        <div class="chatbox">
    		<div class="chatlogs">
			<div class="chat friend">
				<div class="user-photo"></div>
				<p class="chat-message">Hi</p>	
			</div>
			<div class="chat friend">
				<div class="user-photo"></div>
				<p class="chat-message">What's up?</p>	
			</div>
			<div class="chat self">
				<div class="user-photo"></div>
				<p class="chat-message">Hi, nothing much</p>	
			</div>
			<div class="chat self">
				<div class="user-photo"></div>
				<p class="chat-message">What's up?</p>	
			</div>
			<div class="chat friend">
				<div class="user-photo"></div>
				<p class="chat-message">
				Nothing much
				</p>	
			</div>
		</div>
		<div class="chat-form">
    <textarea  onchage={this.onChageText}>{this.state.text}</textarea>
			<button onClick="submit">Send</button>
		</div>
	</div>
    </>
    );
  }
}
