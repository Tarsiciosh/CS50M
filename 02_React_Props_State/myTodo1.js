import React from 'react';
import { render } from 'react-dom';


const Todo = props => (
  <li>
    <input type="checkbox"/>
    <button>delete</button>
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
      todos: [...this.state.todos, {text: text}],
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
