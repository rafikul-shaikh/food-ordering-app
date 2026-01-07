import PageLayout from "../component/PageLayout";

const Team = () => {
  return (
    <PageLayout title="Meet Our Team">
      <p className="text-gray-700 mb-6">
        Behind Rafikul’s Kebab is a passionate team dedicated to quality and
        customer satisfaction.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { name: "Rafikul Shaikh", role: "Founder" },
          { name: "Head Chef", role: "Culinary Expert" },
          { name: "Operations Manager", role: "Logistics & Delivery" },
        ].map((member, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 text-center hover:shadow-md transition"
          >
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-3" />
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Team;
