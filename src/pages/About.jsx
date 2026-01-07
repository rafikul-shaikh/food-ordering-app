import PageLayout from "../component/PageLayout";

const About = () => {
  return (
    <PageLayout title="About Rafikul’s Kebab">
      <p className="text-gray-700 leading-relaxed mb-4">
        Rafikul’s Kebab was founded with a passion for serving delicious,
        freshly prepared kebabs using high-quality ingredients.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Our mission is to deliver great taste, consistent quality, and
        exceptional customer experience with every order.
      </p>

      <p className="text-gray-700 leading-relaxed">
        We believe food is not just a meal — it’s an experience.
      </p>
    </PageLayout>
  );
};

export default About;
