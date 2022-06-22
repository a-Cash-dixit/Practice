import React, { Component } from 'react'
import "./Search_Box.css";
export default class SearchBox extends Component {
  render() {
    const {onChangeHandler}=this.props;
    return (
      <div className='search-box'>
        <input type="search" onChange={onChangeHandler} placeholder="Search..."/>
      </div>
    )
  }
}
