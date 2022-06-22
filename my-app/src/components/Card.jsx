import React from 'react'
export default function Card(props){
    const {name,id,email}=props.user;
    return (
        <div key={id} className='card-container'>
            <img alt={`Employee ${name}`} src={`https://robohash.org/${id}?set=set5&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}
// export default class Card extends Component {
//     render() {
//         const {name,id,email}=this.props.user;
//         return (
//             <div key={id} className='card-container'>
//                 <img alt={`Employee ${name}`} src={`https://robohash.org/${id}?set=set5&size=180x180`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }
