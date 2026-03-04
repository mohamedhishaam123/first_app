console.log("First Part");

console.log(`----------`)
console.log("Q1")


var x =Number("123")
console.log(x + 7)

/////
console.log(`----------`)
console.log("Q2")

let test = 0
if(test == false)
{
     console.log("invalid")
}

/////
console.log(`----------`)
console.log("Q3")

for(let i = 0; i < 10 ;i++)
{
    if(i % 2 == 1)
    { 
        console.log(i)
    }
}

///////
console.log(`----------`)
console.log("Q4")

arr = [1,2,3,4,5,6,7,8,9]


const even = arr.filter(item => item % 2 == 0)
console.log(even)


////////
console.log(`----------`)
console.log("Q5")


const arr1 =[1,2,3]
const arr2 =[4,5,6]

const newArr =[...arr1,...arr2]
console.log(newArr)

////////
console.log(`----------`)
console.log("Q6")

let day = 1

switch(day)
{
case 1 :
    console.log("Sunday")
    break;

case 2 :
    console.log("Monday")
    break;

case 3 :
    console.log("Tuesday")
    break;

case 4 :
    console.log("Wednesday")
    break;
case 5 :
    console.log("Thursday")
    break;
case 6 :
    console.log("Friday")
    break;
case 7 :
    console.log("Saturday") 
    break;

default:
    console.log("invalid num")


}

//////
console.log(`----------`)
console.log("Q7")


arrr = ["a", "ab", "abc"]

const y = arrr.map(item => item.length)
console.log(y);


/////////
console.log(`----------`)
console.log("Q8")


function divisible(num)
{
    
    if(num % 3 === 0 && num % 5 === 0)
       { console.log("divisible by Both") }
    
    
    else if(num % 3 === 0 || num % 5 ===0)
       { console.log("divisible by one") }

    else
    {console.log("not divisible ") }

}
divisible(15)


/////////

console.log(`----------`)
console.log("Q9")


const square = (a) => a * a
console.log(square(5))

/////////

console.log(`----------`)
console.log("Q10")


function Destructuring(human)
{
    const { name , age }= human
    return`${name} is ${age} years old`
}
const human ={ name : "John",age :19}
console.log(Destructuring(human))
/////////

console.log(`----------`)
console.log("Q11")

const numbers =[1,4,6]

const z =numbers.reduce((acc , item )=> item + acc)
console.log(z)

/////////

console.log(`----------`)
console.log("Q12")

// لسه موصلناش للحته دي


/////////

console.log(`----------`)
console.log("Q13")

const arr3 =[4,25,7,9,22,15]
function Maxiaum(arr3)
{    let Max = arr3[0]
    for(let i =0; i <arr3.length;i++)
        {if(arr3[i]>= Max)
        {Max = arr3[i]}}
        return Max
}
const max = Maxiaum(arr3)
console.log(max)

/////////

console.log(`----------`)
console.log("Q14")

function yourKeys(Person)
{

const arr4 = Object.keys(Person);
console.log(arr4)

}

const person = {
name: "John",
age: 20}

yourKeys(person)


/////////

console.log(`----------`)
console.log("Q15")

function word(Sentence)
{
    return Sentence.split(" ")
    
}
Sentence="The quick brown fox"
const WORD = word(Sentence)
console.log(WORD)
