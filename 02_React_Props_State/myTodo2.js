import React from 'react';
import { render } from 'react-dom';


let id = 0

const Todo = props => (
  <li>
    <input type="checkbox"/>
    <button onClick= {props.onDelete} >delete</button>
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

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div>
        <button onClick= {() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo => ( // theses (   ) are optional
            <Todo
              onDelete= {() => this.removeTodo (todo.id) }
              todo={todo}
            />)
          )}
        </ul>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
