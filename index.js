//01
let transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 }
];

function groupByType(transactions) {
    let grouped = {};
    for (let transaction of transactions) {
        if (!grouped[transaction.type]) {
            grouped[transaction.type] = [];
        }
        grouped[transaction.type].push(transaction);
    }
    return grouped;
}

console.log(groupByType(transactions));
// Output: { deposit: [{ type: "deposit", amount: 100 }, { type: "deposit", amount: 200 }], withdrawal: [{ type: "withdrawal", amount: 50 }, { type: "withdrawal", amount: 30 }] }



//02
let employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
];
let ageLimit = 30;

function filterEmployees(employees, ageLimit) {
    return employees.filter(employee => employee.age <= ageLimit);
}

console.log(filterEmployees(employees, ageLimit));
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]


//03
let classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
];

function checkDuplicates(classes) {
    let nameSet = new Set();
    for (let cls of classes) {
        for (let name of cls) {
            if (nameSet.has(name)) {
                return true;
            }
            nameSet.add(name);
        }
    }
    return false;
}

console.log(checkDuplicates(classes));
// Output: true


//04
function getCurrentDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let day = String(now.getDate()).padStart(2, '0');
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

console.log(getCurrentDateTime());
// Output: e.g., "2024-06-19 14:45:30" (current date and time)


//05
function calculateAge(birthdate) {
    let birthDate = new Date(birthdate);
    let now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    let monthDifference = now.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && now.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

console.log(calculateAge("1990-06-15"));
// Output: (age based on current date)


//06
function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0];
}

console.log(addDays("2022-06-15", 10));
// Output: "2022-06-25"


//07
function dateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let timeDifference = d2 - d1;
    return timeDifference / (1000 * 60 * 60 * 24);
}

console.log(dateDifference("2022-06-15", "2023-06-15"));
// Output: 365


//08
let userPreferences = new Map();

function setPreference(key, value) {
    userPreferences.set(key, value);
}

function getPreference(key) {
    return userPreferences.get(key);
}

setPreference("theme", "dark");
setPreference("fontSize", "16px");
console.log(getPreference("theme")); // Output: dark
console.log(getPreference("fontSize")); // Output: 16px


//09
function countOccurrences(arr) {
    let occurrences = new Map();
    for (let item of arr) {
        occurrences.set(item, (occurrences.get(item) || 0) + 1);
    }
    return occurrences;
}

// Example usage:
let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(strings));
// Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }


//10
let employees = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

function mapEmployeeIdsToNames(employees) {
    let employeeMap = new Map();
    for (let employee of employees) {
        employeeMap.set(employee.id, employee.name);
    }
    return employeeMap;
}

let employeeMap = mapEmployeeIdsToNames(employees);
console.log(employeeMap);
// Output: Map { 1 => 'Alice', 2 => 'Bob', 3 => 'Charlie' }


//11
let inventory = new Map();

function addItem(itemName, quantity) {
    inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
    if (inventory.has(itemName)) {
        inventory.set(itemName, inventory.get(itemName) + quantity);
    } else {
        console.log("Item not found");
    }
}

function checkItemQuantity(itemName) {
    return inventory.get(itemName) || 0;
}

addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);
console.log(checkItemQuantity("apple")); // Output: 150
console.log(checkItemQuantity("banana")); // Output: 150


//12
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));
// Output: [1, 2, 3, 4, 5]


//13
function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    return [...set1].filter(item => set2.has(item));
}

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
console.log(intersection(array1, array2));
// Output: [3, 4]


//14
function union(...arrays) {
    let resultSet = new Set();
    for (let array of arrays) {
        for (let item of array) {
            resultSet.add(item);
        }
    }
    return [...resultSet];
}

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let array3 = [5, 6, 7];
console.log(union(array1, array2, array3));
// Output: [1, 2, 3, 4, 5, 6, 7]


//15
function removeItemsFromSet(items, set) {
    for (let item of items) {
        set.delete(item);
    }
}

let mySet = new Set([1, 2, 3, 4, 5]);
let itemsToRemove = [2, 3];
removeItemsFromSet(itemsToRemove, mySet);
console.log([...mySet]); // Output: [1, 4, 5]

//16
function updateAttendance(newAttendance, overallAttendance) {
    for (let student of newAttendance) {
        overallAttendance.add(student);
    }
    return overallAttendance;
}

let overallAttendance = new Set(["Alice", "Bob"]);
let todayAttendance = ["Charlie", "Alice"];
overallAttendance = updateAttendance(todayAttendance, overallAttendance);
console.log([...overallAttendance]);
// Output: ["Alice", "Bob", "Charlie"]
