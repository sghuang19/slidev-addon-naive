export default (req, res) => {
  console.log("Function is being called!");
  res.status(200).send("Hello, world!");
};
