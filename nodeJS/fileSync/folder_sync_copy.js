const fs = require("fs");

// Get the current filenames
// before the function
getCurrentFilenames();

fs.cpSync("test3", "test4", {
  recursive: true,
  force: true,
});

// Get the current filenames
// after the function
getCurrentFilenames();
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
