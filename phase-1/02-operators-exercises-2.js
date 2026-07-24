// Write code that:
// 1. Create a variable 'rating' with value 4.2
// 2. Use if/else if/else to assign a grade:
//    - 4.5 or higher: "Excellent"
//    - 4.0 or higher: "Very Good"
//    - 3.5 or higher: "Good"
//    - 3.0 or higher: "Average"
//    - Below 3.0: "Poor"
// 3. Log the grade
// 4. Test with at least 2 different ratings

const rating = 3.6;

if (rating >= 4.5) {
    console.log("Excellent");
} else if (rating >= 4.0) {
    console.log("Very Good");
} else if (rating >= 3.5) {
    console.log("Good");
} else if (rating >= 3.0) {
    console.log("Average");
} else {
    console.log("Poor");
}