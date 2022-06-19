import "./App.css";
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      employees:[]
    }
  }
  componentDidMount(){
    // console.log("Hi");
    fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>this.setState(()=>{
      return {
        employees:data
      }
    }));
  }
  render() {
    return (
      <div className='app'>
        {this.state.employees.map(user=>{
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}
