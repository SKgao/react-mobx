import { observable, computed, autorun, when, reaction, action, runInAction } from 'mobx'

class Store {
    @observable array = [1, 2, 3, 4]
    @observable obj = {a: 1}
    @observable map = new Map()

    @observable num = 123
    @observable str = 'abc'
    @observable bool = true

    // 计算属性
    @computed get mixed() {
        return `${this.str}-${this.num}`
    }

    // 对可观察数据的修改，只触发一次副作用
    @action bar() {
        this.str = 'Zoro'
        this.array = [1, 2]
    }

    // 绑定上下文，可以将方法作为参数传递
    @action.bound boundBar() {
        this.str = 'Zoro'
        this.array = [1, 0, 0]
    }
}

// computed
const store = new Store()
const foo = computed(() => `computed: ${store.num}-${store.str}`)
// 坚挺数据变化
// foo.observe(change => console.log(change))
store.str = 'hi'
store.num = 100
console.log(foo, foo.get())

// autorun 对计算属性或可观察数据，发生改变时作出响应
// autorun(() => console.log('autorun:', store.mixed))
// store.str = 'hi～'
// store.num = 200

// when 参数为两个函数, 第一个参数的返回值true, 第二个函数执行
when(() => !!store.bool, () => `when: It's true!`)
store.bool = false

// reaction 参数为两个函数, 第一个参数的返回值, 作为第二个函数执行参数
reaction(() => [store.array, store.str], arr => console.log('reaction:', arr.join('::')))
// store.array = [1, 2, 3]
// store.str = 'zoro'
store.bar()

const boundBar = store.boundBar
boundBar()

// 第一个自定义字符串参数可选，调用立即执行antion
runInAction('modify', () => {
    store.str = 'Zoroo'
    store.array = [1, 1, 1]
})