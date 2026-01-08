const PageLayout = ({ title, children }) => {
  return (
    <div className="pt-28 min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          {title && <h1 className="text-2xl font-bold mb-6">{title}</h1>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
