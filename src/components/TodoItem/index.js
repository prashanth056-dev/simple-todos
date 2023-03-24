import './index.css'

const TodoItem = props => {
  const {todo, btn} = props
  const {id, title} = todo
  const onBtnClick = () => {
    btn(id)
  }
  return (
    <li className="todoLstItem">
      <p>{title}</p>
      <div>
        <button className="btn" onClick={onBtnClick} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
