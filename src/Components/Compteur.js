import React, { Component } from 'react'

export default class compteur extends Component {
constructor(props) {
    super(props)

    this.state = {count : 0,
         memory: null,
    }
    console.log("construct()");
}
componentDidMount= () => {
    this.setState({memory: setInterval(() => {
        this.setState({count:this.state.count+ 1    })
    }, 1000)
})

 console.log("componentDidMount()")  
 
}
componentDidUpdate =()=>{
console.log(this.state.memory);
console.log("componentDidUpdate()");
}
componentWillUnmount = ()=>{
clearInterval(this.state.memory)
console.log("componentWillUnmount()");
}
 increment=() => {this.setState({ count:this.state.count+1  })}
 decrement=() => {this.setState({ count:this.state.count-1  })
}
    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
               {this.state.count} 
               <button onClick={this.decrement}>-</button>
               
            </div>
        )
    }
}
