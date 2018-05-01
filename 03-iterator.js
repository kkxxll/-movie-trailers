function makeIterator (arr) {
    let nextIndex = 0

    // 返回一个迭代器对象
    return {
        // next() 方法返回结果对象
        next: () => {
            if (nextIndex < arr.length) {
                return {
                    value: arr[nextIndex++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

const it = makeIterator(['你', '才是', '吃货'])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

function *makeIterator1 (arr) {
    for( let i = 0; i<arr.length; i++) {
        yield arr[i]
    }
}

const gen = makeIterator1(['你', '才是', '吃货'])

console.log('gen:', gen.next().value)
console.log('gen:', gen.next().value)
console.log('gen:', gen.next().value)
console.log('gen:', gen.next().value)