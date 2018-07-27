import React from 'react'




export default function GameList(props){

console.log(props.gameList);
  return(
    <div>
      { props.gameList.map(element =>{
        return(
          <div>
            <h3>{element.name}</h3>
            <img url="{element.image_url}" height="250"  width="250"/>
            <ul>
                {'  Developer: '+element.developer}
                {' | Price: '+element.price}
                {' | Rating: '+element.rating}
            </ul>


            <button onClick={() => props.deleteGame(element)}>Remove</button>
          </div>
        )
      }) }
    </div>
  )
}

// import React from 'react'
//
//
// export default function GameList(props){
//   return(
//     <div>
//       {props.gameList.map(element =>{
//         return(
//           <div>
//             <h1>{element.name}</h1>
//         <ul> {element.price},
//             {element.rating},
//             {element.image_url}
//         </ul>
//           </div>
//         )
//       })}
//     </div>
//   )
// }
