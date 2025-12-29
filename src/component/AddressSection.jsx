// import { useState } from "react";

// const AddressSection = () => {
//   const [address, setAddress] = useState({
//     name: "",
//     phone: "",
//     street: "",
//     city: "",
//     pincode: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="w-sm p-4 mt-6">
//       <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>

//       {/* Inputs will go here */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={address.name}
//           onChange={handleChange}
//           className="border p-3 rounded"
//         />

//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           value={address.phone}
//           onChange={handleChange}
//           className="border p-3 rounded"
//         />

//         <input
//           type="text"
//           name="street"
//           placeholder="Street Address"
//           value={address.street}
//           onChange={handleChange}
//           className="border p-3 rounded md:col-span-2"
//         />

//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={address.city}
//           onChange={handleChange}
//           className="border p-3 rounded"
//         />

//         <input
//           type="text"
//           name="pincode"
//           placeholder="Pincode"
//           value={address.pincode}
//           onChange={handleChange}
//           className="border p-3 rounded"
//         />
//       </div>
//     </div>
//   );
// };

// export default AddressSection;
