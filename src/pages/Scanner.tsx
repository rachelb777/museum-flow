import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle, Bookmark, MapPin, Video } from "lucide-react";

const Scanner = () => {
  return (
    <div className="min-h-screen flex flex-col pb-20">
      {/* Viewfinder */}
      <div className="relative flex-1 flex items-center justify-center bg-black m-4 rounded-2xl overflow-hidden">
        {/* Simulated camera feed placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[hsl(0,0%,5%)] to-black" />

        {/* Crosshair overlay */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 scanner-crosshair">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
        </div>

        {/* HUD text */}
        <div className="absolute top-4 left-4 text-[10px] text-muted-foreground tracking-widest uppercase">
          Gesture Detection
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground">
          Show a hand gesture to navigate
        </div>
      </div>

      {/* Test navigation buttons */}
      <div className="px-4 pb-2 space-y-2">
        <p className="text-[10px] text-muted-foreground tracking-widest uppercase text-center mb-2">
          Test Navigation
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Link to="/inquiry">
            <Button variant="secondary" className="w-full gap-2 text-sm">
              <HelpCircle size={16} /> Test: Inquiry
            </Button>
          </Link>
          <Link to="/collection">
            <Button variant="secondary" className="w-full gap-2 text-sm">
              <Bookmark size={16} /> Test: Save
            </Button>
          </Link>
          <Link to="/wayfinding">
            <Button variant="secondary" className="w-full gap-2 text-sm">
              <MapPin size={16} /> Test: Directions
            </Button>
          </Link>
          <Link to="/live">
            <Button variant="secondary" className="w-full gap-2 text-sm">
              <Video size={16} /> Test: Live
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
