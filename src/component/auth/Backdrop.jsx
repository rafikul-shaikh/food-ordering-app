const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40" />;
};

export default Backdrop;
