import { useState } from "react";
import { FiArrowLeft, FiTrash2 } from "react-icons/fi";
import axios from "axios";

let toggleShoppingCartFn;

const ShoppingCart = ({
  cart,
  handleUpdateQuantity,
  handleRemoveItem,
  calculateTotalPrice,
  handleCheckout,
  handleBackToCart,
  checkedOut,
  setCheckedOut,
  setCart,
}) => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");

  const toggleShoppingCart = (e) => {
    e.preventDefault();
    setShowShoppingCart((prevState) => !prevState);
  };
  toggleShoppingCartFn = toggleShoppingCart;

  const handleChangeTable = (e) => {
    setSelectedTable(e.target.value);
  };

  const handleCheckoutClick = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID not found in local storage");
      return;
    }

    const checkoutData = {
      userId: parseInt(userId),
      tableNumber: selectedTable,
      cart: cart.map((item) => ({
        product: {
          id: item.product.id,
          price: item.product.price,
          title: item.product.title,
        },
        quantity: item.quantity,
      })),
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/purchases/",
        checkoutData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Checkout successful:", response.data);
      setCart([]);
      setCheckedOut(true);
    } catch (error) {
      const errorMessage =
        error.response?.data || "An error occurred during checkout.";
      console.error("Error during checkout:", errorMessage);
    }
  };

  const fetchPurchaseHistory = async (userId) => {
    try {
      const response = await axios.get("http://localhost:8000/purchases/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPurchases(response.data.data);
    } catch (error) {
      console.error("Kesalahan saat mengambil riwayat pembelian:", error);
    }
  };

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
                      <td>{item.product.title}</td>
                      <td>{item.product.price.toLocaleString("id-ID")}</td>
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
                      <td>{item.product.price * item.quantity}</td>
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
              <div className="flex items-center justify-between p-2">
                <div className="">
                  <label htmlFor="tableNumber" className="">
                    Table:
                  </label>
                  <select
                    id="tableNumber"
                    className="px-3 py-1 border border-gray-300 rounded"
                    onChange={handleChangeTable}
                  >
                    <option value="">Select Table</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>
                        Table {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={handleCheckoutClick}
                  className="bg-primary text-white px-4 py-1 rounded-md hover:bg-white hover:text-primary border border-primary transition-colors duration-300"
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
