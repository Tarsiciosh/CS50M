import React from 'react';
import { render } from 'react-dom';


let id = 0

const Todo = props => (
  <li>
    <input type="checkbox"/>
    <button onClick= {() => this.deleteTodo(props.todo.id)}>delete</button>
    <span>{props.todo.text}</span>
  </li>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo(){
    const text = prompt("write your todo please")
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id++, text: text}
      ],
    })
  }

  deleteTodo(id){
    this.setState({
      todos: this.todo.filter(todo.id !== id)
    })
  }

  render() {
    return (
      <div>
        <button onClick= {() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo => <Todo todo={todo}/>)}
        </ul>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
