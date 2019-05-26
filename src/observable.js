import { observable, isArrayLike, extendObservable } from 'mobx'

// observable 可观察数据
// 包括 array object map
const arr$ = observable(['a', 'b', 'c'])
// arr$[4] 禁止数组越界访问
console.log(arr$, isArrayLike(arr$))

const obj$ = observable({a: 1, b: 2})
// 向 observable 对象添加 observable 属性
extendObservable(obj$, {
    c: 3
});
console.log(obj$, obj$.c)

const map$ = observable(new Map())
map$.set('a', 10)
console.log(map$, map$.has('a'))

// 原始类型 observable.box 包装为可观察数据
// get() 获取原始类型值
// set() 修改原始类型值
const num$ = observable.box(20)
const str$ = observable.box('aabbc')
const bool$ = observable.box(false)
str$.set('ad')
console.log(num$, str$, str$.get(), bool$)