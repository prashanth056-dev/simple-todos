import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  onDeleteTodo = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(eachItem => eachItem.id !== id)
    this.setState({todosList: filteredList})
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="mainBg">
        <div className="card">
          <h1 className="head">Simple Todos</h1>
          <ul>
            {todosList.map(each => (
              <TodoItem todo={each} btn={this.onDeleteTodo} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
