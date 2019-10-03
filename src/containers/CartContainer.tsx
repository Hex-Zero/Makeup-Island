import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { checkout } from "../actions"
import Cart from "../components/Cart"
import { getCartProducts, getTotal } from "../reducers"

const CartContainer = ({ products, total, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
  />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state),
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
