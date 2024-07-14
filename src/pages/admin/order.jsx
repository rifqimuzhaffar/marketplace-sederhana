import { useEffect, useState } from "react";
import axios from "axios";

const Order = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPurchases = async () => {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        setError("User ID tidak ditemukan.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8000/purchases/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPurchases(response.data.data);
      } catch (err) {
        setError(
          err.response?.data?.error || "Terjadi kesalahan saat mengambil data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order</h2>
      <p>Here are the orders:</p>
      {purchases.length > 0 ? (
        <table className="min-w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Purchase ID</th>
              <th className="border border-gray-300 px-4 py-2">User ID</th>
              <th className="border border-gray-300 px-4 py-2">Total Price</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.purchaseId}>
                <td className="border border-gray-300 px-4 py-2">
                  {purchase.purchaseId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {purchase.userId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {purchase.totalPrice.toLocaleString("id-ID")}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {purchase.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(purchase.createdAt).toLocaleDateString("id-ID")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600 mt-4">No purchases found.</p>
      )}
    </div>
  );
};

export default Order;
