import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PackageCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  variant?: "default" | "premium";
}

const PackageCard = ({ title, price, features, isPopular, variant = "default" }: PackageCardProps) => {
  const isPremium = variant === "premium";

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in the ${title} (${price})\n\nPackage Details:\n${features.map(f => `• ${f}`).join('\n')}\n\nPlease provide more information.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=971525257136&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className={`relative h-full flex flex-col hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
      isPremium ? "border-2 border-secondary" : ""
    }`}>
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold shadow-gold px-4 py-1">
          Most Popular
        </Badge>
      )}
      <CardHeader className={isPremium ? "bg-gradient-primary text-primary-foreground" : ""}>
        <CardTitle className="font-montserrat text-2xl">{title}</CardTitle>
        <div className="mt-4">
          <span className="font-oswald text-4xl font-bold">{price}</span>
          <span className={`font-inter text-sm ml-2 ${isPremium ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
            per person
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex-1 flex flex-col">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="font-inter text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Button
            variant={isPremium ? "hero" : "default"}
            className="w-full"
            size="lg"
            onClick={handleWhatsAppClick}
          >
            Enquire Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageCard;
