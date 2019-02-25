// Debouncing in Javascript

var counter = 0;
const getData = () => {
    console.log("Fetching data .... ", counter++);
}


const debounce = function (fn , d) {
    console.log("doSomeMagic Called");
    let timer;
    return function () {
        console.log("debounce called");
        let context = this;
        console.log("timer = ", timer);
        // The clearTimeout() cancels a timeout previously established by calling setTimeout()
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log("Inside setTimeout");
            fn.call(context);
        }, d)
    }
}

const betterFunction = debounce(getData, 300);
