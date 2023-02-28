const http = require("http");
const server = http.createServer();
let sigintCounter = 0;
let beforeSigintReceiveTime = 0;

// Start the server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Handle graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received. Closing server...");
  server.close(() => {
    console.log("Server closed gracefully");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  let sigintReceiveTime = Date.now();

  if (sigintReceiveTime - beforeSigintReceiveTime < 3000) {
    sigintCounter += 1;
    beforeSigintReceiveTime = sigintReceiveTime;
    if (sigintCounter < 5) {
      console.log("SIGINT signal received. Closing server...");
      server.close(() => {
        console.log("Server closed gracefully");
        process.exit(0);
      });
    } else {
      console.log("SIGINT signal received over 5 times. Forced server close.");
      process.exit(0);
    }
  } else {
    sigintCounter = 1;
    beforeSigintReceiveTime = sigintReceiveTime;
    console.log("SIGINT signal received. Closing server...");
    server.close(() => {
      console.log("Server closed gracefully");
      process.exit(0);
    });
  }
});
