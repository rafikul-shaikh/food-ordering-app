const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className="fixed inset-0 bg-black/50 z-999" />;
};

export default Backdrop;

// const Backdrop = ({ onClose }) => {
//   return (
//     <div
//       onClick={onClose}
//       className="
//         fixed inset-0
//         bg-black/50

//         z-999
//         transition-opacity
//         duration-300
//       "
//     />
//   );
// };

// export default Backdrop;
