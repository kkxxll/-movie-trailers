const luke = {
    name: '吃货',
    say: function() {
        setTimeout(function() {
            console.log('this:', this.name)
        }, 50)
    },
    sayWithThat: function() {
        let that = this
        setTimeout(function() {
            console.log('that:', that.name)
        }, 500)
    },
    sayWithArrow: function() {
        setTimeout(() => {
            console.log('arrow:', this.name)
        }, 1000)
    },
    sayWithOutArrow: () => {
        setTimeout(() => {
            console.log('out arrow:', this.name)
        }, 1500)
    }
}

luke.say()
luke.sayWithThat()
luke.sayWithArrow()
luke.sayWithOutArrow()