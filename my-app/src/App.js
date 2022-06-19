import "./App.css";
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      employees:[],
      searchField:""
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
    const filteredEmployees=this.state.employees.filter((user)=>{
      return (
        user.name.toLocaleLowerCase().includes(this.state.searchField)
      )
    });
    return (
      <div className='app'>
        <input className="search" placeholder="Search..." type="search" onChange={(event)=>{
          const searchField=event.target.value.toLocaleLowerCase();
          this.setState(()=>{
            return {
              searchField
            }
          })
        }} />
        {filteredEmployees.map(user=>{
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
