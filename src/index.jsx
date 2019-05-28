import { observable, action, computed } from 'mobx'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { observer, propTypes as ObservablePropTypes } from 'mobx-react'

class Todo {
    id = Math.random()
    @observable title = ''
    @observable finished = false

    constructor(title) {
        this.title = title
    }

    @action.bound toggle() {
        this.finished = !this.finished
    }
}

class Store {
    @observable todos = []

    @action.bound createTodo(title) {
        this.todos.unshift(new Todo(title))
    }

    @action.bound removeTodo(todo) {
        this.todos.remove(todo)
    }

    @computed get left() {
        return this.todos.filter(e => !e.finished).length
    }
}

const store = new Store()

@observer
class TodoList extends Component {
    static propTypes = {
        store: PropTypes.shape({
            createTodo: PropTypes.func,
            removeTodo: PropTypes.func,
            todos: ObservablePropTypes.observableArrayOf(
                ObservablePropTypes.observableObject
            ).isRequired
        }).isRequired
    }

    state = {
        inputValue: ''
    }

    handleSumbit = (e) => {
        e.preventDefault()
        const { store } = this.props
        const { inputValue } = this.state

        store.createTodo(inputValue)
        this.setState({ inputValue: '' })
    }

    handleChange = (e) => {
        const inputValue = e.target.value.trim()
        inputValue && this.setState({ inputValue })
    }

    render() {
        const { store: { todos, left, removeTodo } } = this.props
        return (
            <div className="todo-list">
                <header>
                    <form onSubmit={this.handleSumbit}>
                        <input
                            type="text"
                            placeholder="what to do?"
                            value={this.state.inputValue}
                            className="input"
                            onChange={this.handleChange}/>
                    </form>
                </header>
                <ul>
                    {
                        todos.map(item => {
                            return <li key={item.id} className="todo-item">
                                <TodoItem todo={item}/>
                                <button onClick={() => removeTodo(item)}>删除</button>
                            </li>
                        })
                    }
                </ul>
                <footer>{ left } items is unfinished!</footer>
            </div>
        )
    }
}

@observer
class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            finished: PropTypes.bool.isRequired,
            toggle: PropTypes.func
        }).isRequired
    }

    handleToggle = () => {
        this.props.todo.toggle()
    }

    render() {
        const { todo: { finished, title } } = this.props
        return (
            <>
                <input
                    type="checkbox"
                    className="toggle"
                    checked={finished}
                    onChange={this.handleToggle}/>
                <span className={['title', finished && 'finished' ].join(' ')}>
                    {title}
                </span>
            </>
        )
    }
}


ReactDOM.render(
    <TodoList store={store}/>,
    document.querySelector('#root')
)
