//扩展  给 application/context/request/responest/helper  新增方法和属性


// 可以用Symbol扩展私有属性
const count = Symbol('count');

// 扩展到app
module.exports = {
    // addCount() {
    //     if (this.adminNum === undefined) {
    //         this.adminNum = 0
    //     }
    //     this.adminNum++;
    // }
    //this.adminNum
    get adminNum() {
        //这里的count 是上面的Symbol, 作用是唯一性, 私有化
        if (this[count] === undefined) {
            this[count] = 0;
        }
        // 当别的地方调用this.adminNum时返回上面赋值后的this[count]
        return this[count]
    },
    //this.adminNum = value
    set adminNum(value) {
        // 权限控制
        this[count] = value;
    }
}