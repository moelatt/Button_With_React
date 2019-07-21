import React, { Component } from 'react';
import NavBar from './components/navBar';
import Counters from './components/counters'
import './App.css';

class App extends Component {
  state = { 
    counters: [
        {id : 1, value: 0},
        {id : 2, value: 0},
        {id : 3, value: 0},
        {id : 4, value: 0}
    ]
 };
 handleReset = () =>{
   const newCounters = this.state.counters.map(newArray =>{
        newArray.value = 0;
        return newArray;
     });
     this.setState({newCounters})
 }
 handelDelete = counterID => {
    const newCounters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({counters: newCounters});
}
handelIncrement = counter => {
    const counters= [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}
handelDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = {...counter};
    counters[index].value--;
    if(counters[index].value < 0){
        counters[index].value = 0;
    }
    this.setState({counters})
}
  render() { 
    // console.log("app-render")
    return ( 
      <React.Fragment>
        <NavBar totalCounters = 
          {this.state.counters.filter(newArray => newArray.value > 0).length}/>
        <main className = 'container'>
          <Counters 
            counters = {this.state.counters}
            onReset = {this.handleReset}
            onDelete = {this.handelDelete}
            onIncrement = {this.handelIncrement}
            onDecrement = {this.handelDecrement}
                    />
        </main>
      </React.Fragment>
     );
  }
} 
export default App;
