var name = {
    firstName: "Manish",
    lastName: "Chandra"
}

Function.prototype.myBind = function(...args) {
    return () => this.call(args[0]);
}

let printName = function () {
    console.log(this.firstName + " " + this.lastName);
}

const printName2 = printName.myBind(name);
printName2();

let printSurName = function () {
    console.log(this.lastName);
}

const surname2 = printSurName.myBind(name);
surname2();