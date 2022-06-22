import React from 'react'
import "./Search_Box.css";
export default function SearchBox(props){
  return (
    <div className='search-box'>
      <input type="search" onChange={props.onChangeHandler} placeholder="Search..."/>
    </div>
  )
}
// export default class SearchBox extends Component {
//   render() {
//     const {onChangeHandler}=this.props;
//     return (
//       <div className='search-box'>
//         <input type="search" onChange={onChangeHandler} placeholder="Search..."/>
//       </div>
//     )
//   }
// }
