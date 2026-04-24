// Util Imports
import { cn } from "@/lib/utils";

const Logo = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img src="felix-logo.jpg" alt="felix" className="size-8.5 rounded-full" />
      <span className="text-xl font-semibold">Felix Bakery</span>
    </div>
  );
};

export default Logo;
