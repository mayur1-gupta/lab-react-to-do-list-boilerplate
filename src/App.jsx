
import './App.css'


import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state={
      arr : [],
      value : " "
    }
  
    this.handleInput=this.handleInput.bind(this)
  }

  handleInput(e){
    this.setState({
      value : e.target.value
    })
  }
  handleAddBtn =() =>{
    this.setState( state=>{
       let arr= state.arr.concat(state.value)
       console.log(arr)
       return{
        arr ,value: ' '
       } 
    })
  }

  handleDeleteBtn =(index)=>{
    this.setState(state=>{
      const arr = state.arr.filter(( arrsr ,Index)=> Index != index)
      return{
       arr
      }
     
    })

  }


  render() {
    return (
      
      <div>
          <div>
          <input type="text" className='inputbox' onChange={this.handleInput}/>
          <button className='addItem' onClick={this.handleAddBtn}>Add item</button>
          </div>
          
          {this.state.arr.map((arr,index)=>{
            return( <div key={index}>
          <input type="text" defaultValue={arr} className='item'/>
          <button onClick={()=>this.handleDeleteBtn(index)} className='deleteItem'>Delete item</button>
          </div>)
             })} 
      </div>
    )
    }
}


export default App
