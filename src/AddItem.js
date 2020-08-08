import React,{Component} from 'react';

class AddItem extends Component{

    state={
        //id:null,
        content:null
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addItem(this.state);
        e.target.reset();
        console.log(e);

    }

    
    handleChange=(e)=>{
        this.setState(
            {//id:parseInt(e.target.value),
                content:e.target.value
            }
        );
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="addfield">Enter ToDoList Item:</label>
                    <input type="text" id="addfield" onChange={this.handleChange}></input>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddItem;