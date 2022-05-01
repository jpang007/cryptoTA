import React, { Component } from 'react';
import axios from 'axios';
var Columns = require('react-columns');
import me from '../../../../img/me.png';
import me2 from '../../../../img/me2.png';
import Fade from 'react-reveal/Fade';
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3
        }}
    />
);


class aboutMe extends Component {

  handleSubmit(e){
          e.preventDefault();
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          // axios.post("http://localhost:8080/send", {
          //     data: {
          //         name: name,
          //         email: email,
          //         messsage: message
          //     }
          // }).then((response)=>{
          //     if (response.data.msg === 'success'){
          //         alert("Message Sent.");
          //         this.resetForm()
          //     }else if(response.data.msg === 'fail'){
          //         alert("Message failed to send.")
          //     }
          // })
      }


  resetForm(){
          document.getElementById('contact-form').reset();
      }

  render() {
    return (
      <div>
      <div className="aboutMe">
        <Fade duration={2000}>
           <p> Hi there! I just want to thank you for checking out this website.
           This was a very fun side project for me to do. I just wanted to focus on two interests of mine; cryptocurrency and
           technical analysis. I'm Jeremy, CS major from the University of California, Riverside.
          Currently, I am working as a Technical Consultant in Washington,
           DC and a mentor for the Nashville Software School. </p>

         <p> For this project I used Dash, a third party app by Plotly, and Python to do the graphing and React Native for
         settting up the actual website. I've always been interested in cryptocurrency and I'm still long on it.
         Obviously, everything on this website should be used for educational purposes and please do not trade without doing your own
         due diligence. </p>

           <p> Finally, I just want to thank my lovely wife, Vera Tang. Who I love very much and really means the world to me.
           Not to mention all my friends who
           helped me throughout this process: James Yang, Bidisa Mukherjee, Randy He,
           Daniil Khlupin, Kevin Shin, Tayler Chan, Luke Tsai, Sachin Zutshi, Quincy Wang,
           Jackie Truong, Courtney Nguyen, Michael Lam, Alex Lee & Alex Bui. There's more people that I couldn't name but
           really though, thanks guys, your support means the world to me.  </p>


          <div className="flip-card">
           <div className="flip-card-inner">
             <div className="flip-card-front">
               <img src={me} className='profilePic' />
             </div>
             <div className="flip-card-back">
               <img src={me2} className='profilePic' />
             </div>
           </div>
         </div>
         </Fade>
       </div>
       <br />
       <ColoredLine color="black" />
       <div className ="contactMeHeader">
        <h1> Free feel to email me! </h1>
       </div>
       <div className = "contactMe">
         <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
           <div className="form-group">
               <label for="name">Name</label>
               <input type="text" className="form-control" id="name" />
           </div>
           <div className="form-group">
               <label for="exampleInputEmail1">Email address</label>
               <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
           </div>
           <div className="form-group">
               <label for="message">Message</label>
               <textarea className="form-control" rows="5" id="message"></textarea>
           </div>
           <button disabled type="submit" className="btn btn-primary">Submit</button>
        </form>
       </div>
       </div>

    )
  }
}

export default aboutMe;
