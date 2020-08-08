import React from "react";

const DisplayItem = (props) => {
    // const todolist;

    const {items,deleteItem} = props;
    // if no element in items, itemes.length =0 means false . It will print No List
    const todolist = items.length ?
    (items.map((item) => {
    
        return (
            <div className="item" key={item.id}>
                <div onClick={()=>{deleteItem(item.id)}}>{item.content}</div>
            </div>
            
            
        )
    })):
    ("no list") 
    return (<div>

        {todolist}
    </div>);
    
}




export default DisplayItem;
