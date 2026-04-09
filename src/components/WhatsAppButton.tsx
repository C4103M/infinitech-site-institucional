import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20InfinitechJr!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-[var(--glow-accent)] hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle className="text-accent-foreground" size={26} />
    </a>
  );
};

export default WhatsAppButton;
