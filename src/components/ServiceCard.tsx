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
}

const ServiceCard = ({ icon: Icon, title, description, detail, link }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <CardContent className="p-6">
        <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <h3 className="font-montserrat text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="font-inter text-muted-foreground text-sm mb-3">{description}</p>
        {detail && (
          <p className="font-inter text-sm font-medium text-secondary mb-4">{detail}</p>
        )}
        {link && (
          <Button variant="outline" size="sm" asChild className="mt-2">
            <Link to={link}>Learn More</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
