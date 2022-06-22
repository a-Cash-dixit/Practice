import React from 'react'
import Card from './Card';
import "./cardList.css";
export default function CardList(props){
  return (
    <div className='card-list'>{props.employees.map((user)=>{
      return(
        <Card key={user.id} user={user}/>
      )
    })}</div>
  )
}
// export default class CardList extends Component {
//   render() {
//     const {employees}=this.props;
//     return (
//       <div className='card-list'>{employees.map((user)=>{
//         return(
//           <Card key={user.id} user={user}/>
//         )
//       })}</div>
//     )
//   }
// }
