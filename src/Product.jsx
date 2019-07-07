import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <div className="header">
            {this.props.name}
          </div>
          <div className="description">
            Price: ${this.props.price}
          </div>
        </div>
        <div className="ui bottom attached button">
          <i className="add icon"></i>
          Add to Cart
        </div>
      </div>
    );
  }
}

export default Product;
