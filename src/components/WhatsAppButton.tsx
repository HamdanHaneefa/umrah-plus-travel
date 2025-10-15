import whatsappIcon from "@/assets/whatsapp_icon.png";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi, I would like to know more about your services.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=971525257136&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp"
        className="w-8 h-8 object-contain"
      />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton;