import React, { Component } from 'react';
import './counter.css';
// single component
class Counter extends Component {
    // state = {
    //     count: this.props.counterObject.value,
    //     address: 'street',
    //     tag: ["tag1", "tag2", "tag3"]
    // };
    styles = {
        fontSize: 25,
        fontWeight: "bold"
    };
    fontSW = {
        fontSize: 25,
        fontWeight: "bold"
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes = classes + ((this.props.counterObject.value === 0) ? "warning" : "primary");
        return classes;
    }
    formatCount(){
        const {value} = this.props.counterObject;
        return value === 0 ? '0': value
     }
    // doHandleIncrement = () => {
    //     this.handleIncrement({id: 1})
    // }
    render() { 
        // console.log(this.props)
        // console.log("counter-render")
        let classes = this.getBadgeClasses();
        return (
            <div >
                {/* <h4>Counter #{this.props.counterObject.id}</h4> */}
                <span style = {this.styles} className = {classes} >{this.formatCount()}</span>

                <button onClick = {() => this.props.onIncrement(this.props.counterObject)}
                style = {this.fontSW} className = "btn btn-secondary btn-sm m-1">+
                </button>
                <button onClick = {() => this.props.onDecrement(this.props.counterObject)} 
                style = {this.fontSW} className = "btn btn-secondary btn-muted m-1">-</button>
                <button onClick = {() => this.props.onDelete(this.props.counterObject.id)} 
                style = {this.fontSW} className = "btn btn-danger btn-sm m-2"> Delete
                </button>    
            </div>
        );
    };
    

}
export default Counter;