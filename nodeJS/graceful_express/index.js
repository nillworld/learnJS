const http = require("http");
const server = http.createServer();

// Keep track of ongoing work
let ongoingWork = [];

// Start the server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Handle graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM signal received. Closing server...");

  // Wait for ongoing work to complete
  if (ongoingWork.length > 0) {
    console.log(`Waiting for ${ongoingWork.length} ongoing work(s) to complete...`);
    await Promise.all(ongoingWork);
  }

  // Close the server
  server.close(() => {
    console.log("Server closed gracefully");
    process.exit(0);
  });
});

process.on("SIGINT", async () => {
  console.log("SIGINT signal received. Closing server...");

  // Wait for ongoing work to complete
  if (ongoingWork.length > 0) {
    console.log(`Waiting for ${ongoingWork.length} ongoing work(s) to complete...`);
    await Promise.all(ongoingWork);
  }
  console.log("????");

  // Close the server
  server.close(() => {
    console.log("Server closed gracefully");
    process.exit(0);
  });
});

// Sample endpoint to simulate ongoing work
server.on("request", (req, res) => {
  if (req.url === "/work") {
    console.log("Starting work...");
    const workPromise = new Promise((resolve) => {
      setTimeout(() => {
        console.log("Work completed");
        resolve();
      }, 500000);
    });
    ongoingWork.push(workPromise);
    workPromise.then(() => {
      const index = ongoingWork.indexOf(workPromise);
      if (index !== -1) {
        ongoingWork.splice(index, 1);
      }
    });
    res.end("Started work");
  } else {
    res.end("Hello World!");
  }
});
