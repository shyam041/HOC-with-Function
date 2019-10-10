import React from 'react';

const ToDoItem = ({item})=>{
  return(
      <li key={item.id}>
        <label>
          <input type="checkbox" disabled readOnly checked={item.done} /> 
          <span className={item.done ? "done" : ""}>{item.text}</span>
        </label>
      </li>
  );
}
const ToDoList = (props)=>{
  return(
    <ol>
      {props.todos.map((item)=>{
        return <ToDoItem item={item} key={item.text}/>
      })}
    </ol>
  );
}
const HOC = (Component)=>{
  return((props)=>{
    return props.todos.length===0?<h3>All done</h3>:<Component todos={props.todos}/>
  });
}

class App extends React.Component{
  state = {todos:[
        { text: "Learn JavaScript", done: true },
        { text: "Learn React", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true }
  ]};
  render(){
    const TodoListWithNull = HOC(ToDoList);  
    return(      
      <TodoListWithNull todos={this.state.todos}/>
    )
  }
}

export default App;
