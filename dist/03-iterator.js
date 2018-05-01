'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(makeIterator1);

function makeIterator(arr) {
    var nextIndex = 0;

    // 返回一个迭代器对象
    return {
        // next() 方法返回结果对象
        next: function next() {
            if (nextIndex < arr.length) {
                return {
                    value: arr[nextIndex++],
                    done: false
                };
            } else {
                return {
                    done: true
                };
            }
        }
    };
}

var it = makeIterator(['你', '才是', '吃货']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function makeIterator1(arr) {
    var i;
    return _regenerator2.default.wrap(function makeIterator1$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i < arr.length)) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 4;
                    return arr[i];

                case 4:
                    i++;
                    _context.next = 1;
                    break;

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var gen = makeIterator1(['你', '才是', '吃货']);

console.log('gen:', gen.next().value);
console.log('gen:', gen.next().value);
console.log('gen:', gen.next().value);
console.log('gen:', gen.next().value);
//# sourceMappingURL=03-iterator.js.map