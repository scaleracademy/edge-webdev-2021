var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Strict Type Assignment
var abc = 23;
// abc = "something";
console.log(abc);
// Strict Typing Lists
var list1 = [45, 56, 78];
// let list2: string[] = ["bipin", "is", "teaching", 5]
var list3 = [45, true, "s"];
console.log(list1, list3);
var random = "random";
random = 24;
// random = true;
var font = "italic";
var myCar;
// myCar.something = true;
// myCar.something = "random";
// myCar.random = "random";
// Strong Typing a Function
function addtwo(x, y) {
    return (x + y).toString();
}
console.log(addtwo(2, 3));
var newTuple = [23, "b", true, 54];
// Angle brackets contain the generic part
// Generics in functions
// function getArray(items: any[]): any[] {
//   return new Array().concat(items)
// }
var lastElement = function (arr) {
    return arr[arr.length - 1];
};
var l1 = lastElement([1, 2, 3]);
var l2 = lastElement(['a', 'b', 'c']);
var l3 = lastElement([1, 'a', 3]);
var makeArray = function (x, y) {
    return [x, y];
};
var a1 = makeArray(5, 6);
var a2 = makeArray(5, 'b');
var a3 = makeArray(null, '5'); // You can add unions while calling a function with generic type
;
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
var f1 = makeFullName({
    firstName: "something",
    lastName: "sinclair",
    age: 25,
    random: true
});
var something;
var me;
