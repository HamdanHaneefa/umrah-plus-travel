import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
}

const TestimonialCard = ({ name, text, rating = 5 }: TestimonialCardProps) => {
  return (
    <Card className="bg-card border-border hover:shadow-card transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center space-x-1 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
          ))}
        </div>
        <p className="text-foreground text-sm mb-4 italic">"{text}"</p>
        <p className="text-sm font-semibold text-foreground">— {name}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
