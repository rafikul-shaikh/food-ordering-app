// import { useState } from "react";

// const PaymentSection = () => {
//   const [paymentMethod, setPaymentMethod] = useState("COD");

//   return (
//     <div className="w-sm p-4 mt-6">
//       <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

//       {/* Options */}
//       <div className="space-y-3">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="radio"
//             value="COD"
//             checked={paymentMethod === "COD"}
//             onChange={() => setPaymentMethod("COD")}
//           />
//           Cash on Delivery
//         </label>

//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="radio"
//             value="ONLINE"
//             checked={paymentMethod === "ONLINE"}
//             onChange={() => setPaymentMethod("ONLINE")}
//           />
//           Online Payment
//         </label>

//         <button
//           className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-gray-800"
//           onClick={() => {
//             alert(`Order placed using ${paymentMethod}`);
//           }}
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentSection;
