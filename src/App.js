import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    const arg = Array(9).fill(1).map((num, index)=>{
      return num = index + 1
    })
    this.state = {
      multiplier : [...arg],
      multiplicand : [...arg]
    }
  }
  render(){
    const {multiplier, multiplicand} = this.state
    console.log(multiplier)
    return(
      <div>
        {multiplicand.map((value)=>{
          return (<List key={value} nums = {{num: value, multiplier: multiplier}}/>)
        })
        }
      </div>
    )
  }
}
class List extends Component{
  render(){
    const {num, multiplier} = this.props.nums
    return(
      <div>
        <h2>{num}</h2>
        <ul>
          {multiplier.map((value)=>{
            return (<li key={value}>{`${num} * ${value} = ${num*value}`}</li>)
          })}
        </ul>
      </div>
    )
  }
}
