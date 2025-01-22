
import { FaPlus } from "react-icons/fa6";
export default function FAQSection() {
  const faqs = [
    {
      question: "What types of chairs do you offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Do your chairs come with a warranty?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "What will be delivered? And When?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Can I try a chair before purchasing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How do I clean and maintain my Comforty chair?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  
  ];

  return (
    <section className="py-10 px-4">
      <h2 className="text-center text-3xl font-semibold mb-6">Questions Looks Here</h2>
      <p className="text-center text-gray-600 mb-10">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#F7F7F7] w-[648px] h-[170px] mx-auto p-4 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-medium text-black mb-2">{faq.question}</h3>
            <p className="text-sm text-gray-700">{faq.answer}</p>
          </div>
          
        ))}
      </div>
    </section>
  );
};

      
    
      
  


  
    
