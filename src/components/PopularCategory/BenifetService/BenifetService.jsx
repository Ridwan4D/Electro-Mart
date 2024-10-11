import {  FaStore, FaTruck, FaShieldAlt, FaCreditCard } from 'react-icons/fa'; // Importing icons for demo
const BenifetService = () => {
    const items = [
      
        { icon: <FaStore />, text: "Open new stores in your city" },
        { icon: <FaTruck />, text: "Free fast express delivery with tracking" },
        { icon: <FaShieldAlt />, text: "Equipment loose and damage insurance" },
        { icon: <FaCreditCard />, text: "Installment without overpayments" },
      ];
    return (
        <div>
              <div className="px-4 py-8">
      <div className="flex lg:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 overflow-x-auto lg:overflow-hidden no-scrollbar">
        {items.map((item, index) => (
          <div
            key={index}
            className="snap-start  flex-shrink-0 w-60 bg-white shadow-lg rounded-lg p-3 flex items-center space-x-4"
          >
            <div className="text-2xl  text-orange-500">{item.icon}</div>
            <p className="text-gray-500">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default BenifetService;