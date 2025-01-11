import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DonationCalculator() {
  return (
    <Button 
      variant="custom"
      className={cn(
        "w-full bg-[#1a7fa8] hover:opacity-90",
        "text-white font-medium py-3"
      )}
    >
      Proceed to Payment
    </Button>
  );
} 