import { useParams } from "react-router-dom";

const LegalPolicies = () => {
  const { type } = useParams();

  const policies = {
    shipping: {
      title: "Shipping & Delivery Policy",
      sections: [
        {
          //   heading: "Overview",
          content: [
            "At Rafikul’s Kebab, we strive to deliver fresh and delicious food to your doorstep as quickly as possible.",
          ],
        },
        {
          heading: "Delivery Timeline",
          points: [
            "Orders are typically delivered within 30 to 60 minutes depending on your location and order volume.",
            "Delivery times may vary during peak hours, bad weather, or unforeseen circumstances.",
          ],
        },
        {
          heading: "Delivery Area",
          points: [
            "We currently deliver within selected serviceable locations.",
            "Orders placed outside the delivery zone may be declined.",
          ],
        },
        {
          heading: "Order Delays",
          points: [
            "If your order is delayed, our support team will notify you with an updated delivery time.",
            "Rafikul’s Kebab is not responsible for delays caused by incorrect address details or customer unavailability.",
          ],
        },
      ],
    },

    return: {
      title: "Return Policy",
      sections: [
        {
          content: [
            "Due to the perishable nature of food items, Rafikul’s Kebab does not accept returns once an order has been delivered.",
          ],
        },
        {
          heading: "When Returns Are Considered",
          points: [
            "Incorrect item delivered",
            "Missing items",
            "Food quality issues reported immediately upon delivery",
          ],
        },
        {
          heading: "How to Raise a Concern",
          content: [
            "Customers must contact our support team within 30 minutes of receiving the order.",
          ],
        },
      ],
    },

    refund: {
      title: "Refund Policy",
      sections: [
        {
          content: ["Refunds are processed only in genuine cases such as:"],
          points: [
            "Failed payment where the amount was deducted",
            "Order cancelled by Rafikul’s Kebab due to operational issues",
            "Incorrect or damaged food items (after verification)",
          ],
        },
        {
          content: [
            "Approved refunds will be credited to the original payment method.",
            "Refund processing may take 5–7 business days depending on your bank or payment provider.",
            "No refunds will be issued for change of mind after order confirmation.",
          ],
        },
      ],
    },

    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          content: [
            "At Rafikul’s Kebab, we value your privacy and are committed to protecting your personal information.",
          ],
        },
        {
          heading: "Information We Collect",
          points: [
            "Name, phone number, and delivery address",
            "Payment details processed securely via trusted payment gateways",
          ],
        },
        {
          heading: "How We Use Your Data",
          points: [
            "Process and deliver orders",
            "Improve our services",
            "Communicate order-related updates",
          ],
        },
        {
          content: [
            "We do not sell or share personal data with third parties except where required by law.",
          ],
        },
      ],
    },

    terms: {
      title: "Terms & Conditions",
      sections: [
        {
          content: [
            "By accessing or using Rafikul’s Kebab, you agree to the following terms and conditions:",
          ],
          points: [
            "Prices and menu items are subject to change without prior notice",
            "The company reserves the right to cancel any order due to operational issues",
            "Customers must provide accurate contact and delivery information",
            "Misuse of the platform may result in account suspension",
          ],
        },
        {
          content: ["All disputes are subject to local jurisdiction."],
        },
      ],
    },
  };

  const policy = policies[type];

  if (!policy) {
    return (
      <div className="pt-24 text-center text-gray-600">Policy not found</div>
    );
  }

  return (
    <div className="pt-28 min-h-screen bg-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h1 className="text-2xl font-extrabold mb-4">{policy.title}</h1>

          {policy.sections.map((section, index) => (
            <div key={index} className="mb-4">
              {section.heading && (
                <h2 className="text-sm font-bold">{section.heading}</h2>
              )}

              {section.content &&
                section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-black-700  leading-relaxed">
                    {paragraph}
                  </p>
                ))}

              {section.points && (
                <ul className="list-disc list-inside ml-4 text-black-700 ">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalPolicies;
