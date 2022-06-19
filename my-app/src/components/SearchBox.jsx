import React, { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    const {onChangeHandler}=this.props;
    return (
      <div>
        <input type="search" onChange={onChangeHandler} placeholder="Search..."/>
      </div>
    )
  }
}
