import React, { Component } from 'react';
import AddItem from "./AddItem.js";
import DisplayItem from './DisplayItem.js';


class App extends Component {

  state = {
    listItem:[]
  }


addItem=(item)=>{
item.id=Math.random();
const listItem=[...this.state.listItem,item];
console.log(listItem);
this.setState({
  listItem:listItem
});
}

deleteItem=(id)=>{
const newList=this.state.listItem.filter((list)=>{
return list.id!==id;
});
this.setState({
  listItem:newList
})

}


  render() {
    return (
      <div>
        <p>Hello</p>
        <AddItem addItem={this.addItem}  />
        <DisplayItem items={this.state.listItem} deleteItem={this.deleteItem}/>
        
      </div>

    );
  }

}

export default App;
