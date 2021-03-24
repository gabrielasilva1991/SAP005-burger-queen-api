/* eslint-disable no-console */
/* eslint-disable quotes */
const getOrders = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Get Orders");
};

const getOrderId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Get OrderId");
};

const orderAdd = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Add Order");
};

const updateOrderId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Update OrderId");
};

const deleteOrderId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Delete OrderId");
};

module.exports = {
  getOrders, getOrderId, orderAdd, updateOrderId, deleteOrderId,
};
