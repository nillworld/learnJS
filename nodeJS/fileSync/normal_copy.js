const fs = require("fs");

// Get the current filenames
// before the function
getCurrentFilenames();
console.log("\nFile Contents of hello.txt:", fs.readFileSync("test_normal_copy.txt", "utf8"));

fs.copyFile("test_normal_copy.txt", "test_normal_copied.txt", () => console.log("copied"));

// Get the current filenames
// after the function
getCurrentFilenames(); // there is not copied file
/* 
	CAN NOT READ 'test_normal_copied.txt'
	- it's writing(resource busy)
*/
// console.log("\nFile Contents of world.txt:", fs.readFileSync("test_normal_copied.txt", "utf8"));

// Function to get current filenames
// in directory
function getCurrentFilenames() {
  console.log("\nCurrent files in directory:");
  fs.readdirSync(__dirname).forEach((file) => {
    console.log(file);
  });
}
