import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FlightBookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    flightFrom: "",
    flightTo: "",
    date: "",
    isRoundTrip: false,
    returnDate: "",
  });

  // ✅ Replace this with your WhatsApp number (with country code, no + or spaces)
  const WHATSAPP_NUMBER = "971525257136";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate round trip return date if needed
    if (formData.isRoundTrip && !formData.returnDate) {
      toast({
        title: "Return date required",
        description: "Please select a return date for round trips.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const message = `*New Flight Booking Request*\n\n` +
`👤 *Name:* ${formData.name}\n` +
`📧 *Email:* ${formData.email}\n` +
`📱 *Phone:* ${formData.phone}\n` +
`✈️ *Flight From:* ${formData.flightFrom}\n` +
`✈️ *Flight To:* ${formData.flightTo}\n` +
`➡️ *Trip Type:* ${formData.isRoundTrip ? "Round Trip" : "One Way"}\n` +
`📅 *Departure Date:* ${formData.date}` +
`${formData.isRoundTrip ? `\n📅 *Return Date:* ${formData.returnDate}` : ""}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');

      toast({
        title: "Redirecting to WhatsApp ✓",
        description: "Ticket will be received soon",
      });
      
      // Reset form
      setFormData({ 
        name: "", email: "", phone: "", 
        flightFrom: "", flightTo: "", date: "",
        isRoundTrip: false, returnDate: "" 
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
        placeholder="Flight From *"
        value={formData.flightFrom}
        onChange={(e) => setFormData({ ...formData, flightFrom: e.target.value })}
        required
        disabled={isSubmitting}
        name="flightFrom"
      />

      <Input
        placeholder="Flight To *"
        value={formData.flightTo}
        onChange={(e) => setFormData({ ...formData, flightTo: e.target.value })}
        required
        disabled={isSubmitting}
        name="flightTo"
      />

      <Input
        type="date"
        placeholder="Departure Date *"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
        disabled={isSubmitting}
        name="date"
      />

      <div className="flex items-center justify-between py-1">
        <Label htmlFor="roundTrip" className="text-foreground">Round Trip</Label>
        <Switch
          id="roundTrip"
          checked={formData.isRoundTrip}
          onCheckedChange={(checked) => setFormData({ ...formData, isRoundTrip: checked })}
          disabled={isSubmitting}
        />
      </div>

      {formData.isRoundTrip && (
        <Input
          type="date"
          placeholder="Return Date *"
          value={formData.returnDate}
          onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
          required={formData.isRoundTrip}
          disabled={isSubmitting}
          name="returnDate"
        />
      )}

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

export default FlightBookingForm;
