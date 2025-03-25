import React ,{ Component } from "react";

class Welcome extends Component{
      constructor(props){
        super(props);
        this.state = {count:0}
        this.increment = this.increment.bind(this);
      }

increment(){
    this.setState({count:this.state.count+1})
}

    render(){
        return(
            <div>
                <h1>
                    welcome,Students
                </h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
            </div>
        );
    }
}

export default Welcome