import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  detail?: string;
  link?: string;
  image: string;
}

const ServiceCard = ({ icon: Icon, title, description, detail, link, image }: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-white border-border">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:text-white" />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-montserrat text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="font-inter text-muted-foreground text-sm mb-3">{description}</p>
        {detail && (
          <p className="font-inter text-sm font-medium text-primary mb-4">{detail}</p>
        )}
        {link && (
          <Button 
            variant="outline" 
            size="sm" 
            asChild 
            className="w-full mt-2 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
          >
            <Link to={link}>Learn More</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
