import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HotelBookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    checkIn: "",
    checkOut: "",
    rooms: "1",
    adults: "1",
    children: "0",
  });

  // ✅ Replace this with your WhatsApp number (with country code, no + or spaces)
  const WHATSAPP_NUMBER = "971525257136";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const message = `*New Hotel Booking Request*\n\n` +
`👤 *Name:* ${formData.name}\n` +
`📧 *Email:* ${formData.email}\n` +
`📱 *Phone:* ${formData.phone}\n` +
`🏢 *City:* ${formData.city}\n` +
`📅 *Check-in:* ${formData.checkIn}\n` +
`📅 *Check-out:* ${formData.checkOut}\n` +
`🛏️ *Rooms:* ${formData.rooms}\n` +
`👥 *Adults:* ${formData.adults}\n` +
`👶 *Children:* ${formData.children}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');

      toast({
        title: "Redirecting to WhatsApp ✓",
        description: "Hotel quote will be received soon",
      });
      
      // Reset form
      setFormData({ 
        name: "", email: "", phone: "", 
        city: "", checkIn: "", checkOut: "",
        rooms: "1", adults: "1", children: "0"
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to open WhatsApp. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" autoComplete="on">
      <Input
        placeholder="Full Name *"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        disabled={isSubmitting}
        autoComplete="name"
        name="name"
      />
      <Input
        type="email"
        placeholder="Email Address *"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        disabled={isSubmitting}
        autoComplete="email"
        name="email"
      />
      <Input
        placeholder="Phone Number *"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
        disabled={isSubmitting}
        autoComplete="tel"
        name="phone"
        type="tel"
      />

      <Input
        placeholder="City/Destination *"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        required
        disabled={isSubmitting}
        name="city"
      />

      <Input
        type="date"
        placeholder="Check-in Date *"
        value={formData.checkIn}
        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
        required
        disabled={isSubmitting}
        name="checkIn"
      />

      <Input
        type="date"
        placeholder="Check-out Date *"
        value={formData.checkOut}
        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
        required
        disabled={isSubmitting}
        name="checkOut"
      />

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Rooms</label>
          <Select 
            defaultValue="1"
            onValueChange={(value) => setFormData({ ...formData, rooms: value })}
            disabled={isSubmitting}
          >
            <SelectTrigger>
              <SelectValue placeholder="Rooms" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Room" : "Rooms"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Adults</label>
          <Select 
            defaultValue="1"
            onValueChange={(value) => setFormData({ ...formData, adults: value })}
            disabled={isSubmitting}
          >
            <SelectTrigger>
              <SelectValue placeholder="Adults" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Adult" : "Adults"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Children</label>
          <Select 
            defaultValue="0"
            onValueChange={(value) => setFormData({ ...formData, children: value })}
            disabled={isSubmitting}
          >
            <SelectTrigger>
              <SelectValue placeholder="Children" />
            </SelectTrigger>
            <SelectContent>
              {[0, 1, 2, 3, 4].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Child" : "Children"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        type="submit" 
        variant="hero" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Get Quote via WhatsApp"
        )}
      </Button>
    </form>
  );
};

export default HotelBookingForm;
