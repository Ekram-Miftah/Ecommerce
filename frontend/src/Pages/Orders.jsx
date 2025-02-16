import Title from "../Component/Title";
import { ShopContext } from "../Context/ShopContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;
  
      console.log("Fetching latest order data...");
  
      const response = await axios.post(backendUrl + "/api/order/userorders", {}, { headers: { token }, params: { timestamp: new Date().getTime() } });
  
      if (response.data.success) {
        let allOrdersItem = [];
        
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });
  
        // Use a deep comparison to check if data is truly different
        const isDataDifferent = JSON.stringify(orderData) !== JSON.stringify(allOrdersItem);
        
        console.log("Previous order data:", orderData);  // Log previous state
        console.log("New order data:", allOrdersItem);   // Log new data
  
        if (isDataDifferent) {
          setOrderData([...allOrdersItem].reverse()); // Update state if there's a change
          console.log("State updated!");
        } else {
          console.log("No change in order data, skipping state update.");
        }
      }
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };
  

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="My" text2="Orders" />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-star gap-6 text-sm">
              <img
                className="w-16 sm:w-20"
                src={item.image?.[0] || "/default-image.jpg"}
                alt={item.name}
              />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-1">
                  Date:{" "}
                  <span className="text-gray-400">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className="mt-1">
                  Payment:{" "}
                  <span className="text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button
                onClick={() => {
                  console.log(
                    "Track Order button clicked! Fetching updated status..."
                  );
                  loadOrderData();
                }}
                className="border px-4 py-2 text-sm font-medium rounded-sm"
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
