///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [{
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]



//this took me to long to figure out idk
const summedPrice = cart.reduce(function(acc, obj) { return acc + obj.price }, 0);
console.log(result)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(couponValue, cartTotal, tax) {
    return (cartTotal * (1 + tax)) - couponValue

}

calcFinalPrice(5, 26.97, .06)
console.log(calcFinalPrice(5, 26.97, .06))

// 26.97 - 5 = 21.97
// 21.97 * 1.06 = 23.2882
// 23.2882

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    my bag will have 4 properties, name, items, cost, and Food.
    I choose these data types because this is what the name of my customer as well as the cost and items their purchases.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customers = [{
        name: 'Logan',
        Items: 2,
        Food: ['Carrots', 'Yogurt', ],
        Cost: 7.36,
    },
    {
        name: 'Kirito',
        Items: 1,
        Food: ['Chicken'],
        Cost: 5.66,
    },
    {
        name: 'Mai',
        Items: 4,
        Food: ['Crackers', 'Soup', 'Yogurt', 'Cheese'],
        Cost: 35.68,
    },
    {
        name: 'ChiChi',
        Items: 5,
        Food: ['Pasta', 'Soda', 'Celery', 'Yogurt', 'Bacon'],
        Cost: 80.99
    }
]