import "./App.css";
import React, { Component } from 'react'
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      employees:[],
      searchField:""
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>this.setState(()=>{
      return {
        employees:data
      }
    }));
  }
  onSearchChange = (event) =>{
    const searchField=event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {
        searchField
      }
    })
  }
  render() {
    const {employees,searchField}=this.state;
    const {onSearchChange}=this;
    const filteredEmployees=employees.filter((user)=>{
      return (
        user.name.toLocaleLowerCase().includes(searchField)
      )
    });
    return (
      <div className='app'>
        <SearchBox onChangeHandler={onSearchChange} />
        <CardList employees={filteredEmployees} />
      </div>
    )
  }
}
