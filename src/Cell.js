import React, {Component} from 'react';

class Cell extends Component{

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    render(){
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickListener}></div>
        )
    }

    clickListener = () => {
        this.setState({
            color: '#333'
        })
    }

}
export default Cell