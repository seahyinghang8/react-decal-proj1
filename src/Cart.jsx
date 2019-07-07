import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";
import Receipt from "./Receipt";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    }
  }

  handleAddToCart(productName, price) {
    let found = false;
    // Check if new item is already in shopping cart
    let newCart = this.state.cartItems.reduce((acc, curr) => {
      if (!found && curr.name === productName && curr.price === price) {
        curr.count += 1;
        found = true;
      }
      acc.push(curr);
      return acc;
    }, []);
    // Add the new item to the shopping cart
    if (!found) newCart.push({
      name: productName,
      price: price,
      count: 1
    });
    this.setState({cartItems: newCart});
  }

  handleRemoveFromCart(productName, price) {
    let mappedCart = this.state.cartItems.map(elem => {
      if (elem.name === productName &&
          elem.price === price &&
          elem.count > 0) {
        elem.count--;
      }
      return elem;
    })
    let filteredCart = mappedCart.filter(elem => elem.count > 0);
    this.setState({cartItems: filteredCart});
  }

  render() {
    return (
        <div className="page-content">
          <div className="ui cards">
            {
              ProductData.products.map(elem => {
                return (
                  <Product
                    key={elem.name}
                    name={elem.name}
                    price={elem.cost}
                    onAddToCart={(productName, price) => {
                      this.handleAddToCart(productName, price);
                    }}
                    onRemoveFromCart={(productName, price) => {
                      this.handleRemoveFromCart(productName, price);
                    }}
                  />
                );
              })
            }
          </div>
          <Receipt items={this.state.cartItems} />
        </div>
    );
  }

}

export default Cart;
