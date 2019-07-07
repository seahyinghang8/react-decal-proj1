import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    let totalCost = item.price * item.count;
    return (
      <div className="receipt-item" key={item.name}>
      	<div className="receipt-text">
      		{item.name} x {item.count}
      	</div>
        <div className="receipt-text">
          ${totalCost.toFixed(2)}
        </div>
      </div>
    );
  }

  reduceSum(acc, curr) {
    return acc + (curr.count * curr.price);
  }

  render() {
    const items = this.props.items;
    let total = items.reduce(this.reduceSum, 0);
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${total.toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;
