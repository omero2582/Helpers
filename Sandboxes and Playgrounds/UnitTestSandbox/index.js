const orderTotal = (order) => {
  return order.items.reduce((sum, cur) => sum + cur.price * (cur.quantity || 1), 0)
};

export default orderTotal;