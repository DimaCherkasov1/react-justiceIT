import {CART_ROUTE, ITEM_ROUTE, MAIN_ROUTE} from "../utils/consts";
import Main from "./Main/Main";
import Cart from "./Cart/Cart";
import ProductPage from "./ProductPage/ProductPage";

export const Routers = [
  {
    path: MAIN_ROUTE,
    Component: Main
  },
  {
    path: CART_ROUTE,
    Component: Cart
  },
  {
    path: ITEM_ROUTE + '/:id',
    Component: ProductPage
  }
]