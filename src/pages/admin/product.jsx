import { FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [newProduct, setNewProduct] = useState({
    image: null,
    title: "",
    price: "",
    description: "",
    display: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

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
      setIsLoading(true);

      if (
        !newProduct.image ||
        !newProduct.title ||
        !newProduct.price ||
        !newProduct.description
      ) {
        toast.error("Please fill in all fields");
        return;
      }

      if (
        !["image/jpeg", "image/png", "image/jpg"].includes(
          newProduct.image.type
        )
      ) {
        toast.error("Only JPG, PNG, JPEG formats are allowed");
        return;
      }

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
      toast.success("Product added successfully");
      setModalIsOpen(false);
      setNewProduct({
        image: null,
        title: "",
        price: "",
        description: "",
        display: true,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    } finally {
      setIsLoading(false);
    }
  };

  const displayStatus = (available) => {
    return available ? "Display" : "No Display";
  };

  const openEditModal = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditProductId(productId);
    setNewProduct({
      image: null,
      title: productToEdit.title,
      price: String(productToEdit.price),
      description: productToEdit.description,
      display: productToEdit.available,
    });
    setModalIsOpen(true);
  };

  const handleEditProduct = async () => {
    try {
      setIsLoading(true);

      if (
        newProduct.image &&
        !["image/jpeg", "image/png", "image/jpg"].includes(
          newProduct.image.type
        )
      ) {
        toast.error("Only JPG, PNG, JPEG formats are allowed");
        return;
      }

      const formData = new FormData();
      formData.append("image", newProduct.image);
      formData.append("title", newProduct.title);
      formData.append("price", newProduct.price);
      formData.append("available", newProduct.display ? "true" : "false");
      formData.append("description", newProduct.description);

      const response = await axios.patch(
        `http://localhost:8000/products/${editProductId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedProductIndex = products.findIndex(
        (product) => product.id === editProductId
      );
      const updatedProducts = [...products];
      updatedProducts[updatedProductIndex] = response.data.data;

      setProducts(updatedProducts);
      toast.success("Product updated successfully");
      setModalIsOpen(false);
      setNewProduct({
        image: null,
        title: "",
        price: "",
        description: "",
        display: true,
      });
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProduct = (productId) => {
    confirmAlert({
      title: "Confirm Delete Product",
      message: "Are you sure you want to delete this product?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:8000/products/${productId}`);
              const updatedProducts = products.filter(
                (product) => product.id !== productId
              );
              setProducts(updatedProducts);
              toast.success("Product deleted successfully");
            } catch (error) {
              console.error("Error deleting product:", error);
              toast.error("Failed to delete product");
            }
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditProductId(null);
    setNewProduct({
      image: null,
      title: "",
      price: "",
      description: "",
      display: true,
    });
  };

  return (
    <div>
      <ToastContainer />
      <h2 className="text-3xl ml-4 my-2 font-bold">Products Data</h2>
      <button
        onClick={() => {
          setModalIsOpen(true);
          setEditProductId(null);
        }}
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
                    <FaEdit
                      onClick={() => openEditModal(product.id)}
                      className="text-blue-500 cursor-pointer lg:h-8 w-8"
                    />
                    <FaTrash
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-500 cursor-pointer lg:h-8 w-8"
                    />
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
            <h2 className="text-xl font-bold mb-2">
              {editProductId ? "Edit Product" : "Add New Product"}
            </h2>
            <form className="space-y-4">
              {editProductId && (
                <div>
                  <label className="block mb-1">Product ID</label>
                  <input
                    type="text"
                    value={editProductId}
                    readOnly
                    className="w-full px-3 py-2 border border-black rounded"
                  />
                </div>
              )}
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
                  value={newProduct.display ? "true" : "false"}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-black rounded"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Description</label>
                <textarea
                  name="description"
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-black rounded"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={editProductId ? handleEditProduct : handleAddProduct}
                  className={`${
                    editProductId ? "bg-blue-500" : "bg-green-500"
                  } text-white px-4 py-2 rounded-md`}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : editProductId ? "Update" : "Add"}
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
