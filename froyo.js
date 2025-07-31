
const flavor =  ['vanilla', 'vanilla', 'vanilla', 'strawberry', 'coffee', 'coffee'];

function iceCreamOrder(array) {
   
    const order = flavor;
    for ( let i = 0; i < array.length; i++) {

    console.log(array[i]);
    }

    return order;
}

const userInput = prompt('What is your favorite ice cream flavor?', "vanilla, vanilla, vanilla, strawberry, coffee, coffee");
const userarray = userInput.split(",")

iceCreamOrder(userarray)