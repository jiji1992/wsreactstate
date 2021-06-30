import React, { Component } from 'react'
import { Col, Image } from 'react-bootstrap';
class Person extends Component {
   
        state = { 
       fullName: "jihen elleuch",
         bio:"étudiant GoMyCode 2021",
         imgSrc:" ./img/photo-profil-jiji.jpg" ,
         profession: " Web developer" ,
        }
        render() {
        return (
            <div>
                  <br />
                <Col xs={6} md={4}>
                    <Image src={this.state.imgSrc} roundedCircle style={{ width: 300 }} />
                </Col>
              <h1> {this.state.fullName}</h1> 
              <h1> {this.state.bio}</h1> 
              
              <h1> {this.state.profession}</h1> 
            </div>
        );
    }
}
export default  Person;



