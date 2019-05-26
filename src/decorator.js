// function Animal() {

// }

// Object.defineProperties(Animal.prototype, {
//     name: {
//         value() {
//             return 'Animal~'
//         }
//     },
//     say: {
//         value() {
//             return `I'm ${this.name()}`
//         }
//     }
// })

// function Dog() {

// }

// Dog.prototype = Object.create(Animal.prototype, {
//     constructor: {
//         value: Dog,
//         enumerable: false
//     },
//     name: {
//         value() {
//             return 'Dog~'
//         }
//     }
// })

// console.log(new Dog().say())
// console.log(Dog.prototype.constructor)

class Animal {
    name() {
        return 'Animal~'
    }
    say() {
        return `I'm ${this.name()}`
    }
}

class Dog extends Animal {
    // 类属性成员定义 transform-class-propeties
    food = 'bone'

    name() {
        return 'Dog~'
    }
}
// console.log(new Dog() instanceof Animal)

/**
 * @param {class} target 被修饰的类
 */
function log(target) {
    // 类修饰属性
    const desc = Object.getOwnPropertyDescriptors(target.prototype)
    for (let key of Object.keys(desc)) {
        if (key === 'constructor') {
            continue
        }
        const func = desc[key].value
        if (typeof func === 'function') {
            Object.defineProperty(target.prototype, key, {
                value(...args) {
                    console.log('befor called::', key)
                    const res = func.apply(this, args)
                    console.log('after called::', key)
                    return res
                }
            })
        }
    }
}

/**
 *
 * @param {class} target 类实例对象
 * @param {string} key 类属性成员名称
 * @param {object} descriptor 该类属性成员描述符
 */
function readonly(target, key, descriptor) {
    // console.log(target, key, descriptor)
    descriptor.writable = false
}

/**
 *
 * @param {class} target 类实例对象
 * @param {string} key 类方法成员名称
 * @param {object} descriptor 该类方法成员描述符
 */
function validate(target, key, descriptor) {
    const func = descriptor.value
    descriptor.value = function(...args) {
        for (let num of args) {
            if (typeof num !== 'number') {
                throw new Error(`${num} is not a number!`)
            }
        }
        return func.apply(this, args)
    }
}

// 类装饰器 transform-decorators-legacy
@log
class Numberic {
    // 类属性成员装饰器
    @readonly PI = 3.1415926

    // 类方法成员装饰器
    @validate
    add(...nums) {
        return nums.reduce((p, n) => p + n, 0)
    }
}

const num = new Numberic()
// num.add(1, 2, 3)
// num.add('1', '2')
