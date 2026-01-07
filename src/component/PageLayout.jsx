const PageLayout = ({ title, children }) => {
  return (
    <div className="pt-24 min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          {title && <h1 className="text-3xl font-semibold mb-6">{title}</h1>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
