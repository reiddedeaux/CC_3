//Task 1 Product Price Management


let prices = [10.99, 11.99, 12.99, 13.99, 14.99] ; // Declaring an array with 5 numerical values as prices
prices.push(15.99) ; //Adding a new price into the array
prices.shift(); // Getting rid of the first prive from the array
console.log("New Prices:", prices); //Logging the new array into the console

//Task 2 Modifying Customer Orders

let orders = [2,3,4,5,6] ; // Declaring an array with 5 numerical values as orders
orders[2] += 5 ; //Increasing the third value in the array by 5
let totalOrders = orders.reduce((total, quantity)=> total + quantity, 0); // Adding all the orders in the array to find the total
console.log("New Orders:", orders); //logging the new array into the console
console.log("Total Orders:", totalOrders); // logging the total amount of orders into the console

//Task 3 Employee Performance Tracking

let employee = {
    name: "Ronnie 2K",  //name
    role: "Digital Marketing Director",  // Role
    performanceScore: 50, // Performance Scored
    isActive: true // Active or not
};
employee.performanceScore = 33 ; //New Performance Scored
employee.promotionEligible = employee.performanceScore >= 80 ; //added a new property if the person has a score higher than 80 they are eligble for a promotion
console.log("New Employee Info", employee); // logging the new performance score for the employee

// Task 4 Customer Feedback Records

let feedback = [
    
    {customerName: "Terry", feedbackText: "Amazing Stuff!", rating: 5 }, //Feedback from terry
    {customerName: "Jimmy", feedbackText: "Okay quality", rating: 3}, // Feedback from jimmy
    {customerName: "Mike", feedbackText: "This is terrible", rating: 1}, //feedback from mike

];
feedback.push({customerName: "Kyle", feedbackText: "Sevice was great!", rating: 5}); // Added feeback from kyle
console.log("Customer Feedback:", feedback);
