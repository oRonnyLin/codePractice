const pizzaOrders = [
  {
    email: 'email@example.com',
    toppings: []
  },
  {
    email: 'email1@example.com',
    toppings:
['Mushrooms', 'Pepperoni', 'Peppers']
  },
  {
    email: 'email2@example.com',
    toppings:
['Cheddar', 'Garlic', 'Oregano']
  },
  { email: 'email3@example.com', toppings: ['Bacon', 'Ham', 'Pineapple'] },
  { email: '', toppings: ['Parmesan', 'Tomatoes'] },
  {
    email: 'email4@example.com',
    toppings:
['Mushrooms', 'Pepperoni', 'Peppers']
  },
  { email: '', toppings: ['Cheddar', 'Tomatoes'] },
  { email: 'email5@example.com', toppings: ['Bacon', 'Ham', 'Pineapple'] },
  { email: 'email6@example.com', toppings: ['Beef', 'Parmesan'] },
  { email: '', toppings: ['Onions', 'Pepperoni'] },
  { email: '', toppings: ['Bacon', 'Ham', 'Pineapple'] }]

const pizzaOrderEmpty = [
  {
    email: 'email@example.com',
    toppings: ['Bacon', 'Ham', 'Pineapple']
  },
  {
    email: 'email2@example.com',
    toppings: []
  },
  {
    email: 'email3@example.com',
    toppings: []
  }
]

const pizzaOrderEmpty2 = [

  {
    email: 'email2@example.com',
    toppings: []
  },
  {
    email: 'email@example.com',
    toppings: ['Bacon', 'Ham', 'Pineapple']
  },
  {
    email: 'email@example.com',
    toppings: ['Bacon', 'Ham']
  },
  {
    email: 'email3@example.com',
    toppings: []
  },
  {
    email: 'email1@example.com',
    toppings:
['Mushrooms', 'Pepperoni', 'Peppers']
  },
  {
    email: 'email1@example.com',
    toppings:
['Mushrooms', 'Pepperoni', 'Peppers2']
  },
  {
    email: 'email1@example.com',
    toppings:
['Mushrooms', 'Pepperoni', 'Peppers3']
  }
]

const piazzaOrder1 = [
  {
    email: 'this',
    toppings: ['valid1', 'valid', 'validtoppping2']
  },
  {
    email: 'this',
    toppings: ['valid1', 'valid', 'validtoppping']
  },
  {
    email: 'this',
    toppings: ['valid1', 'valid', 'validtoppping3']
  }
]

function printWinners1 (inputArray) {
  // Perform a QuickSort on the array. We provide an anonymous function to do the comparisons.
  inputArray.sort((a, b) => {
    // Convert each toppings array to a string and do a string comparison
    return a.toppings.toString().localeCompare(b.toppings.toString())
  })

  let previousEmail = ''
  let previousToppingsAsString = ''
  let previousToppingCount = 0
  let numberOfSimilarOrders = 0
  // Iterate through the array, with "order" being each item in the array
  inputArray.map((order) => {
    const toppingsAsString = order.toppings.toString()
    if (toppingsAsString === previousToppingsAsString) {
      numberOfSimilarOrders++
    } else {
      if ((numberOfSimilarOrders === 1) && (previousToppingCount ===
   3) && (previousEmail) !== '') {
        // Print out the email.
        console.log(previousEmail)
      }
      previousToppingsAsString = toppingsAsString
      previousEmail = order.email
      previousToppingCount = order.toppings.length
      numberOfSimilarOrders = 1
    }
  })
}

function printWinners2 (inputArray) {
  const hashTable = new Map()

  // Iterate through the array, with "order" being each item in the array.
  inputArray.map((order) => {
    if ((order.toppings.length === 3) && (order.email !== '')) {
      const toppingsAsString = order.toppings.toString()

      const matchingValue = hashTable.get(toppingsAsString)
      if (matchingValue) {
        // This key was already in the hash table.
        // matchingValue is a reference to the object in the hashtable
        matchingValue.duplicate = true
      } else {
        // Insert into the hash table, using the toppings as the key and an object containing the email as the value.
        hashTable.set(toppingsAsString, {
          email: order.email,
          duplicate: false
        })
      }
    }
  })
  // Iterate through the values in the hash table, with "value" being each value.
  hashTable.forEach((value) => {
    if (!value.duplicate) {
    // Print out the email.
      console.log(value.email)
    }
  })
}

console.log('QuickSort method: ')
printWinners1(piazzaOrder1)
console.log('Hashmap method: ')
printWinners2(piazzaOrder1)
