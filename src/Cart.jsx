import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";

class Cart extends React.Component {

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
