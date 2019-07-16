function array() {
    const arr = Object.create(array.prototype)
    Object.defineProperty(arr, 'length', {
        enumerable: false,
        value: 0,
        writable: true
    })

    for (const key in arguments) {
        arr[key] = arguments[key]
        arr.length++
    }

    return arr
}

array.prototype.push = function(newItem) {
    this[this.length] = newItem
    this.length++
}

array.prototype.pop = function() {
    this.length--
    const itemPoped = this[this.length]
    delete this[this.length]
    return itemPoped
}

array.prototype.map = function(cb) {
    const result = array()
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            const item = this[index]
            result.push(cb(item, index))
        }
    }
    return result
}

array.prototype.filter = function(cb) {
    const result = array()
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            const item = this[index]
            if (cb(item, index)) {
                result.push(item)
            }
        }
    }
    return result
}

const names = array('João', 'Maria')
const namesUpper = names.map(
    name => name.toUpperCase()
)
const namesBig = names.filter(
    name => name.length > 4
)

console.log(names)
console.log(namesUpper)
console.log(namesBig)