import { useParams } from "react-router-dom";
import Footer from "../component/Footer";

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
            "At Rafikul’s Kebab, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your data when you access our website, place an order, or interact with our services.",
          ],
        },

        {
          heading: "Information We Collect",
          points: [
            "Personal details such as your name, phone number, and delivery address",
            "Order details including items purchased and delivery preferences",
            "Payment-related information processed securely through authorized third-party payment gateways",
            "Technical information such as device type, browser, and IP address for security and analytics purposes",
          ],
        },

        {
          heading: "How We Use Your Information",
          points: [
            "To process, confirm, and deliver your food orders efficiently",
            "To communicate order updates, delivery status, and customer support responses",
            "To improve our menu, services, and overall customer experience",
            "To ensure platform security and prevent fraudulent activity",
          ],
        },

        {
          heading: "Data Sharing and Disclosure",
          points: [
            "We do not sell, rent, or trade your personal information to third parties",
            "Information may be shared only with trusted service providers such as delivery partners and payment gateways for order fulfillment",
            "Data may be disclosed if required to comply with legal obligations or government regulations",
          ],
        },

        {
          heading: "Data Security",
          content: [
            "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, misuse, or disclosure. While we strive to safeguard your information, no online platform can guarantee absolute security.",
          ],
        },

        {
          heading: "Your Rights",
          points: [
            "You have the right to access, update, or correct your personal information",
            "You may request deletion of your data, subject to legal and operational requirements",
            "You may opt out of promotional communications at any time",
          ],
        },

        {
          heading: "Changes to This Policy",
          content: [
            "Rafikul’s Kebab reserves the right to update this Privacy Policy from time to time. Any changes will be effective immediately upon posting on the platform. Continued use of our services constitutes acceptance of the updated policy.",
          ],
        },

        {
          content: [
            "By using Rafikul’s Kebab services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.",
          ],
        },
      ],
    },

    terms: {
      title: "Terms & Conditions",
      sections: [
        {
          content: [
            "Welcome to Rafikul’s Kebab. By accessing, browsing, or placing an order through our website or application, you agree to comply with and be bound by the following Terms and Conditions. Please read these terms carefully before using our services. If you do not agree with any part of these terms, you should refrain from using our platform.",
          ],
        },

        {
          heading: "1. Use of the Platform",
          points: [
            "The platform is intended solely for personal and non-commercial use.",
            "Users must be at least 18 years of age or accessing the platform under the supervision of a legal guardian.",
            "You agree to use the platform only for lawful purposes and in a manner that does not infringe the rights of others.",
            "Any misuse, unauthorized access, or attempt to disrupt the platform’s operations is strictly prohibited.",
          ],
        },

        {
          heading: "2. Account Registration",
          points: [
            "To place an order, you may be required to provide accurate personal information including name, contact number, and delivery address.",
            "You are responsible for maintaining the confidentiality of your account information.",
            "Rafikul’s Kebab reserves the right to suspend or terminate accounts found to be providing false or misleading information.",
          ],
        },

        {
          heading: "3. Orders and Availability",
          points: [
            "All orders placed through the platform are subject to acceptance and availability.",
            "Menu items, prices, and offers are subject to change without prior notice.",
            "Rafikul’s Kebab reserves the right to refuse or cancel any order due to operational limitations, unavailability of items, or suspected fraudulent activity.",
          ],
        },

        {
          heading: "4. Pricing and Payments",
          points: [
            "All prices listed on the platform are inclusive of applicable taxes unless stated otherwise.",
            "Payments must be completed using approved payment methods available on the platform.",
            "In case of payment failure or technical issues, the company shall not be held responsible for delays caused by third-party payment gateways.",
          ],
        },

        {
          heading: "5. Delivery Policy",
          points: [
            "Delivery timelines provided are estimated and may vary based on location, traffic conditions, weather, or order volume.",
            "Customers are responsible for providing accurate delivery details.",
            "Rafikul’s Kebab shall not be liable for delivery failures resulting from incorrect address information or customer unavailability.",
          ],
        },

        {
          heading: "6. Cancellation, Returns & Refunds",
          points: [
            "Orders once confirmed may not be cancelled after preparation has begun.",
            "Due to the perishable nature of food items, returns are not accepted once the order is delivered.",
            "Refunds, if applicable, will be processed as per our Refund Policy after proper verification.",
          ],
        },

        {
          heading: "7. Food Quality and Allergies",
          points: [
            "Rafikul’s Kebab maintains high standards of hygiene and food quality.",
            "Customers are advised to inform us of any food allergies or dietary restrictions before placing an order.",
            "The company shall not be held liable for allergic reactions arising from failure to disclose relevant information.",
          ],
        },

        {
          heading: "8. Intellectual Property",
          points: [
            "All content on the platform, including logos, images, text, and designs, is the intellectual property of Rafikul’s Kebab.",
            "Unauthorized use, reproduction, or distribution of platform content is strictly prohibited.",
          ],
        },

        {
          heading: "9. Limitation of Liability",
          points: [
            "Rafikul’s Kebab shall not be liable for any indirect, incidental, or consequential damages arising from the use of the platform.",
            "The company’s liability, if any, shall be limited to the value of the order placed by the customer.",
          ],
        },

        {
          heading: "10. Suspension or Termination",
          points: [
            "The company reserves the right to suspend or terminate access to the platform without prior notice in case of policy violations.",
            "Any misuse, abusive behavior, or fraudulent activity may result in permanent account suspension.",
          ],
        },

        {
          heading: "11. Governing Law and Jurisdiction",
          content: [
            "These Terms and Conditions shall be governed by and interpreted in accordance with the laws applicable in the local jurisdiction. Any disputes arising from the use of the platform shall be subject to the exclusive jurisdiction of the competent courts.",
          ],
        },

        {
          heading: "12. Changes to Terms",
          content: [
            "Rafikul’s Kebab reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the platform after changes are made constitutes acceptance of the revised terms.",
          ],
        },

        {
          content: [
            "By using Rafikul’s Kebab services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.",
          ],
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
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* className="pt-28 min-h-screen bg-gray-200" 
      pt-28 h-[200vh] bg-red-500 */}
      <div className="grow pt-28 pb-30 max-w-4xl mx-auto px-4">
        {/* max-w-4xl mx-auto px-4 */}

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h1 className="text-2xl font-extrabold mb-4">{policy.title}</h1>

          {policy.sections.map((section, index) => (
            <div key={index} className="mb-4">
              {section.heading && (
                <h2 className="text-sm font-bold">{section.heading}</h2>
              )}

              {section.content &&
                section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700  leading-relaxed">
                    {paragraph}
                  </p>
                ))}

              {section.points && (
                <ul className="list-disc list-inside ml-4 text-gray-700 ">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LegalPolicies;
