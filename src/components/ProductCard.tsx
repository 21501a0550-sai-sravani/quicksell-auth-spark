import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  title: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category: string | null;
  condition: string;
  is_sold: boolean;
  created_at: string;
  profiles?: {
    username: string | null;
    full_name: string | null;
  };
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const sellerName = product.profiles?.full_name || product.profiles?.username || 'Anonymous Seller';

  return (
    <Card className={cn(
      "group relative overflow-hidden bg-gradient-card shadow-card hover:shadow-card-hover",
      "transition-all duration-300 hover:scale-[1.02] cursor-pointer",
      product.is_sold && "opacity-75",
      className
    )}>
      <div className="aspect-square overflow-hidden">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <div className="text-center text-muted-foreground">
              <div className="text-4xl mb-2">📦</div>
              <p className="text-sm">No image</p>
            </div>
          </div>
        )}
        {product.is_sold && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              SOLD
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-foreground line-clamp-2 flex-1">
              {product.title}
            </h3>
            <Badge variant="secondary" className="ml-2 shrink-0">
              {product.condition}
            </Badge>
          </div>
          
          {product.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          )}
          
          <div className="flex items-center justify-between pt-2">
            <div className="text-2xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </div>
            <div className="text-sm text-muted-foreground">
              by {sellerName}
            </div>
          </div>
          
          {product.category && (
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};