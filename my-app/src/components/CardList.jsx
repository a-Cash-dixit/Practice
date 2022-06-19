import React, { Component } from 'react'

export default class CardList extends Component {
  render() {
    const {employees}=this.props;
    return (
      <div>{employees.map((user)=>{
        return(
            <h1 key={user.id}>{user.name}</h1>
        )
      })}</div>
    )
  }
}
