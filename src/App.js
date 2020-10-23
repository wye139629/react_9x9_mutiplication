import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      multiplier : [1,2,3,4,5,6,7,8,9],
      multiplicand : [1,2,3,4,5,6,7,8,9]
    }
  }
  render() {
    const {multiplier, multiplicand} = this.state
    let numberItems = []
    let item
    for(let i = 0; i < multiplier.length; i++){
        item = <NumberItem multiplier = {multiplier[i]} multiplicand = {multiplicand}/>
        numberItems.push(item)
    }
    return (
      <div>
        {numberItems}
      </div>
    )
  }
}
class NumberItem extends Component{
  render(){
    const multiplier = this.props.multiplier
    const multiplicand = this.props.multiplicand
    let multiplyItmes = []
    let multiplyItme
    for(let i = 0; i < multiplicand.length; i++){
      multiplyItme = <Multiply multiplier = {multiplier} multiplicand = {multiplicand[i]}/>
      multiplyItmes.push(multiplyItme)
    }
    return(
     <div>
       <h2>
        {multiplier}
       </h2>
       <ul>
          {multiplyItmes}
       </ul>
     </div>
    )
  }
}

class Multiply extends Component{

  render(){
    const multiplier = this.props.multiplier
    const multiplicand = this.props.multiplicand
    return(
      <li>{multiplier + "*" +multiplicand + "=" + multiplier * multiplicand}</li>
    )
  }
}
