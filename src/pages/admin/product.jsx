import { FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    image: null,
    title: "",
    price: "",
    description: "",
    display: true,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const toastId = toast.info("Loading products...", {
          autoClose: false,
          position: "top-center",
          theme: "colored",
        });
        const response = await axios.get("http://localhost:8000/products/");
        setProducts(response.data.data);
        toast.dismiss(toastId);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewProduct((prev) => ({ ...prev, image: files[0] }));
    } else if (name === "price") {
      if (!isNaN(value) || value === "") {
        setNewProduct((prev) => ({ ...prev, [name]: value }));
      }
    } else if (name === "display") {
      setNewProduct((prev) => ({
        ...prev,
        display: value === "true",
      }));
    } else {
      setNewProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("image", newProduct.image);
      formData.append("title", newProduct.title);
      formData.append("price", newProduct.price);
      formData.append("available", newProduct.display ? "true" : "false");
      formData.append("description", newProduct.description);

      const response = await axios.post(
        "http://localhost:8000/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setProducts([...products, response.data.data]);
      setModalIsOpen(false);
      toast.success("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    }
  };

  const displayStatus = (available) => {
    return available ? "Display" : "No Display";
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <ToastContainer />
      <h2 className="text-3xl ml-4 my-2 font-bold">Products Data</h2>
      <button
        onClick={() => setModalIsOpen(true)}
        className="bg-black text-white px-4 py-2 ml-4 mb-2 rounded-md"
      >
        Add Product
      </button>
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">No</th>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Display</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="p-2 border text-center">{index + 1}</td>
                <td className="p-2 border flex justify-center items-center">
                  <img
                    src={product.img_url}
                    alt={product.title}
                    width={"50px"}
                    className="outline-none"
                  />
                </td>
                <td className="p-2 border text-center">{product.title}</td>
                <td className="p-2 border text-center">{product.price}</td>
                <td className="p-2 border text-center">
                  {displayStatus(product.available)}
                </td>
                <td className="p-2 border text-center max-w-[300px] overflow-x-auto">
                  {product.description}
                </td>
                <td className="p-2 border">
                  <div className="flex justify-center gap-2 lg:gap-6">
                    <FaEdit className="text-blue-500 cursor-pointer lg:h-8 w-8" />
                    <FaTrash className="text-red-500 cursor-pointer lg:h-8 w-8" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalIsOpen && (
        <div
          className="fixed inset-0 z-50 flex p-4 items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md max-h-[500px] w-full overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-2">Add New Product</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-black rounded"
                />
                <p className="text-[10px] text-red-500 mt-1">
                  *Only JPG, PNG, JPEG formats with a maximum size of 5MB.
                </p>
              </div>
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Name Product"
                  value={newProduct.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-black rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Price</label>
                <input
                  type="text"
                  name="price"
                  placeholder="0"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-black rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Display</label>
                <select
                  name="display"
                  value={newProduct.display}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-black rounded"
                >
                  <option value={true}>Display</option>
                  <option value={false}>No Display</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Description</label>
                <textarea
                  name="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-black rounded"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleAddProduct}
                  className="bg-black text-white px-4 py-2 rounded-md mr-2"
                >
                  Add Product
                </button>
                <button
                  type="button"
                  onClick={() => setModalIsOpen(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProduct;
