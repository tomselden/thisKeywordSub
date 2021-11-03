
// tacoTruck this Keyword test 

const tacoTruck = {
    revenue: 300,
    expenses: 100,
    profit: profit
}

const lemonadeStand = {
    revenue: 50,
    expenses: 15,
    profit: profit
}

function profit(){
    return this.revenue - this.expenses
}

console.log(tacoTruck.profit())          

// Assigning forEach to the Array.prototype

Array.prototype.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}

let myNumbers = [ 1, 2, 3 ]
myNumbers.forEach(function(element){
    console.log(element)
})

// Bonus (can't get it to work)

function toUnorderedList(callback) {

    let ul = document.createElement('ul')
    callback()
    document.body.append(ul)
    document.ul.append(li)
    return ul

}

let userNames = [ 'Niketta', 'Samir', 'Eli', 'Azhar' ]
let list = userNames.toUnorderedList(function(userName){
    let li = document.createElement('li')
    li.textContent = userName
    return li
})

document.body.append(list)
