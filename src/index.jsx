import { observable, action } from 'mobx'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { observer, propTypes as ObservablePropTypes } from 'mobx-react'

class Store {
    @observable cache = { queue: [] }

    @action.bound refresh() {
        this.cache.queue.push(1)
    }
}

const store = new Store()

@observer
class Bar extends Component {
    static propTypes = {
        queue: ObservablePropTypes.observableArray
    }

    render() {
        const { queue } = this.props
        return (
            <span>{ queue.length }</span>
        )
    }
}

class Foo extends Component {
    static propTypes = {
        cache: ObservablePropTypes.observableObject
    }

    render() {
        const { cache, refresh } = this.props
        return (
            <div>
                <button onClick={refresh}>add</button>
                <Bar queue={cache.queue}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Foo
        cache={store.cache}
        refresh={store.refresh}/>,
    document.querySelector('#root')
)