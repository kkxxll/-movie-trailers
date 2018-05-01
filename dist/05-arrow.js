'use strict';

var luke = {
    name: '吃货',
    say: function say() {
        setTimeout(function () {
            console.log('this:', this.name);
        }, 50);
    },
    sayWithThat: function sayWithThat() {
        var that = this;
        setTimeout(function () {
            console.log('that:', that.name);
        }, 500);
    },
    sayWithArrow: function sayWithArrow() {
        var _this = this;

        setTimeout(function () {
            console.log('arrow:', _this.name);
        }, 1000);
    },
    sayWithOutArrow: function sayWithOutArrow() {
        setTimeout(function () {
            console.log('out arrow:', undefined.name);
        }, 1500);
    }
};

luke.say();
luke.sayWithThat();
luke.sayWithArrow();
luke.sayWithOutArrow();
//# sourceMappingURL=05-arrow.js.map