const numbers = [1, 2, 3, 4];

const result = numbers.map((num) => {
  if (num % 2 === 0) {
    return num * 2;
  } else {
    return num;
  }
});


const users = [
  { id: 1, name: "John", age: 17 },
  { id: 2, name: "Jane", age: 22 },
  { id: 3, name: "Mike", age: 19 }
];

const adults = users.filter(user => user.age >= 18);
console.log(adults);


const formatCurrency = (amount: number) => {
    return (isNaN(amount)) ? 'NGN 0' : `NGN ${Number(amount).toLocaleString()}`;
}
console.log(formatCurrency(1000.657));

const formatCurrency2 = (amount: number) => {
    return new Intl.NumberFormat('en-NG', { 
        style: 'currency',
        minimumFractionDigits: 2, 
        currency: 'NGN' }).format(amount);
}

console.log(formatCurrency2(1250000.657));


// const users = [
//   { id: 1, name: "John", age: 17 },
//   { id: 2, name: "Jane", age: 22 },
//   { id: 3, name: "Mike", age: 19 }
// ];

//TODO: Implement the following functions:

/**Return only users above 18
 * Return an array of names only
 * Check if all users are adults
 * const all
 * Find a user by ID = 2
**/

const bigchild = users.filter(user => user.age >= 18);
console.log(bigchild);

const names = users.map(user => user.name);
console.log(names); 

const all = users.every(user => user.age >= 18);
console.log(all);

const userById = users.find(user => user.id === 2); 
console.log(userById);  



