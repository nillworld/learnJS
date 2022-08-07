export default {
  port: 3000,
  fetch(req) {
    return new Response("Welcome to Bun!");
  },
};
