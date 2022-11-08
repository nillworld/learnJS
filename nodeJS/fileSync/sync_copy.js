const fs = require("fs");

// Get the current filenames
// before the function
getCurrentFilenames();
console.log("\nFile Contents of hello.txt:", fs.readFileSync("test_sync_copy.txt", "utf8"));

fs.copyFileSync("test_sync_copy.txt", "test_sync_copied.txt");

// Get the current filenames
// after the function
getCurrentFilenames();
console.log("\nFile Contents of world.txt:", fs.readFileSync("test_sync_copied.txt", "utf8"));
/* 
	IT IS WORKING WELL.
	work with sync_copy
*/

// Function to get current filenames
// in directory
function getCurrentFilenames() {
  console.log("\nCurrent files in directory:");
  fs.readdirSync(__dirname).forEach((file) => {
    console.log(file);
  });
}
