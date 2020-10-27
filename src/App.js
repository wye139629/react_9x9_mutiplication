import React, { Fragment, useState } from 'react';

export default function App(){
  const args = Array(9).fill(1).map((value, index)=>{
    return value = index + 1
  })
  const [multiplyArray, setMultiplier] = useState([...args])
  console.log(multiplyArray)
  return (
    <Fragment>
      {
        multiplyArray.map((num)=>{
          return(
            <ListItem multiplyProps={{multiplican: multiplyArray, multiplier: num}}/>
          )
        })
      }
    </Fragment>
  )
}

function ListItem(props){
  const {multiplican, multiplier} = props.multiplyProps
  return (
    <div>
      <h2>{multiplier}</h2>
      <ul>
        {multiplican.map((value)=>{
          return <li>{`${multiplier} * ${value} = ${multiplier*value}`}</li>
        })}
      </ul>
    </div>
  )
}
