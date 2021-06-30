import React, { Component } from 'react';
//import  Profile  from "./Components/Person";
import Compteur  from "./Components/Compteur";
import 'bootstrap/dist/css/bootstrap.min.css';
 class App extends Component {
  state={show : false,
  }
  handleShow=() => {
     this.setState({
       show:!this.state.show
     })
  
  }
  render() {
    return (
      <div>
        { this.state.show?<Compteur/>:"show the Profile"}
        <button onClick={this.handleShow}>{this.state.show? "hide":"Show"}</button>
        
      </div>
    )
  }
}

export default App;
  