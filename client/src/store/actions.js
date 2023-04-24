export const addOrder = (order) => ({
  type: "ADD_ORDER", payload: order
});

export const addOrders = (order) => {
  // console.log('from actions: ', order)
  return {
  type: "ADD_ORDERS", payload: order
}};

export const updateOrder = (order) => {
  // console.log('from actions: ', order)
  return {
  type: "UPDATE_STATUS", payload: order
}};
