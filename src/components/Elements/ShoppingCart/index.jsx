import { useState } from "react";
import { FiArrowLeft, FiTrash2 } from "react-icons/fi";

let toggleShoppingCartFn;

const ShoppingCart = ({
  cart,
  handleUpdateQuantity,
  handleRemoveItem,
  calculateTotalPrice,
  handleCheckout,
  handleBackToCart,
  checkedOut,
  purchaseHistory,
}) => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const toggleShoppingCart = (e) => {
    e.preventDefault();
    setShowShoppingCart((prevState) => !prevState);
  };
  toggleShoppingCartFn = toggleShoppingCart;

  return (
    <>
      <div
        className={`absolute overflow-auto top-full w-full lg:w-[25rem] h-screen bg-white text-black z-10 ${
          showShoppingCart ? "left-0" : "left-[100%]"
        }`}
      >
        {checkedOut ? (
          <div>
            <div className="flex items-center justify-between">
              <button className="ml-2" onClick={handleBackToCart}>
                <FiArrowLeft className="h-8 w-8" />
              </button>
              <h1 className="text-2xl flex-1 text-center py-2 mr-6">
                Purchase History
              </h1>
            </div>
            <ul className="divide-y divide-black">
              {purchaseHistory.map((purchase, index) => (
                <li key={index} className="px-4">
                  <div>
                    <p className="text-lg">{purchase.time}</p>
                    {purchase.product && (
                      <div className="flex justify-between items-center">
                        <p>
                          {purchase.product.name} x {purchase.product.quantity}
                        </p>
                        <p>
                          IDR{" "}
                          {(
                            purchase.product.price * purchase.product.quantity
                          ).toLocaleString("id-ID")}
                        </p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xl mt-4">
              Total Pembelian: IDR{" "}
              {purchaseHistory
                .reduce((total, purchase) => {
                  return (
                    total + purchase.product.price * purchase.product.quantity
                  );
                }, 0)
                .toLocaleString("id-ID")}
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-4xl text-center py-4 border-b-primary border">
              Cart
            </h1>
            {cart && cart.length > 0 ? (
              <table className="text-left border-separate table-auto border-spacing-x-2 mx-auto sm:border-spacing-x-10 lg:border-spacing-x-4">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.price.toLocaleString("id-ID")}</td>
                      <td className="text-center">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-5 h-5 flex justify-center items-center border px-1 rounded-full bg-primary hover:bg-white ml-2"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-5 h-5 flex justify-center items-center border px-1 rounded-full bg-primary hover:bg-white mr-2"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{item.price * item.quantity}</td>
                      <td>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="border p-2 rounded-full bg-primary hover:bg-white"
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3" className="text-right font-semibold py-4">
                      Total:
                    </td>
                    <td colSpan="2" className="text-left font-bold py-4">
                      IDR {calculateTotalPrice().toLocaleString("id-ID")}
                    </td>
                  </tr>
                </tfoot>
              </table>
            ) : (
              <div className="text-center text-gray-600 mt-4">
                Cart is empty
              </div>
            )}
            {cart && cart.length > 0 && (
              <div className="text-right mt-4 pr-4">
                <button
                  onClick={handleCheckout}
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-white hover:text-primary border border-primary transition-colors duration-300"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export { ShoppingCart, toggleShoppingCartFn };
