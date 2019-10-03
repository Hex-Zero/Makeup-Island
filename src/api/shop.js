/**
 * Mocking client-server processing
 */
import _products from "./products.json"
const TIMEOUT = 1
// console.log(Products)

export default {
  getProducts: (cb, timeout) =>
    setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
}
