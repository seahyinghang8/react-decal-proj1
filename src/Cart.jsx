import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";

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
                  />
                );
              })
            }
          </div>
        </div>
    );
  }

}

export default Cart;
