const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function test() {
  let test = "not work";
  await delay(2000);
  test = "It's working";

  console.log(test);

  return test;
}
// es 2022
const users = await delay(1000);
// const users = await test();

export { users };
