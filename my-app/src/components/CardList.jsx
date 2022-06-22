import React, { Component } from 'react'
import "./cardList.css";
export default class CardList extends Component {
  render() {
    const {employees}=this.props;
    return (
      <div className='card-list'>{employees.map((user)=>{
        const {name,id,email}=user;
        return(
          <div id={id} className='card-container'>
            <img  alt={`Employee ${name}`} src={`https://robohash.org/${id}?set=set5&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        )
      })}</div>
    )
  }
}
