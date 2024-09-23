import { useDispatch, useSelector } from "react-redux";
import Banner from "../common/Banner";
import { getCartTotal, removeItem, updateQuantity } from "../store/cartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalAmount,
    deliveryCharge,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartProducts]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const emptyCartMsg = (
    <h4 className="container text-center py-4 font-bold">Your Cart is Empty</h4>
  );

  console.log(cartProducts);

  return (
    <>
      <Banner title="Home" />
      {cartProducts.length === 0 ? (
        emptyCartMsg
      ) : (
        <div className="container mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="col-span-2 overflow-auto mb-5">
              <table className="table-auto w-full text-center bg-white shadow-lg">
                <thead className="bg-btn-color text-white">
                  <tr>
                    <th className="py-2">Products</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Quantity</th>
                    <th className="py-2">Total</th>
                    <th className="py-2">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((cartProduct) => (
                    <tr key={cartProduct.id} className="border-b">
                      <td className="py-4 flex items-center justify-center">
                        <img
                          src={cartProduct.img}
                          alt="img"
                          className="w-12 h-12 mr-2"
                        />
                        {cartProduct.title}
                      </td>
                      <td className="py-4">{cartProduct.price}</td>
                      <td className="py-4">
                        <div className="flex items-center justify-center">
                          <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-l"
                            onClick={() =>
                              decreaseQty(cartProduct.id, cartProduct.quantity)
                            }
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="w-12 text-center bg-gray-100 border-0"
                            value={cartProduct.quantity || 1}
                            readOnly
                          />
                          <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-r"
                            onClick={() =>
                              increaseQty(cartProduct.id, cartProduct.quantity)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">{cartProduct.totalPrice}</td>
                      <td className="py-4">
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                          onClick={() => handleRemoveItem(cartProduct.id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <form className="mb-6">
                <div className="flex">
                  <input
                    type="text"
                    className="flex-grow bg-gray-100 p-3 rounded-l outline-none"
                    placeholder="Coupon Code"
                  />
                  <Link className="bg-btn-color text-white p-3 rounded-r hover:bg-green-500">
                    Apply Coupon
                  </Link>
                </div>
              </form>
              <h5 className="text-xl font-semibold mb-3">Cart Summary</h5>
              <div className="bg-gray-100 p-6 rounded shadow-md">
                <div className="border-b pb-2 mb-3">
                  <div className="flex justify-between mb-3">
                    <h6>Subtotal</h6>
                    <h6>{totalAmount}</h6>
                  </div>
                  <div className="flex justify-between">
                    <h6>Shipping</h6>
                    <h6>{deliveryCharge}</h6>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-lg font-semibold">
                    <h5>Total</h5>
                    <h5>{totalAmount + deliveryCharge}</h5>
                  </div>
                  <button className="bg-btn-color text-white w-full py-3 mt-4 rounded hover:bg-green-500">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
