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
    return(
      multiplier.map((num)=>{
        return (
        <div key={num}>
          <h2>{num}</h2>
          <ul>
            <ItemList nums = {{num, multiplicand}}/>
          </ul>
        </div>)
      })
    )
  }
}

class ItemList extends Component{
  render(){
    const {num, multiplicand} = this.props.nums
    return(
      multiplicand.map((value)=>{
        return (<li key={value}>{ num + "*" + value + "=" + num * value}</li>)
      })
    )
  }
}
