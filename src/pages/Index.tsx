import { Link } from "react-router-dom";
import { ScanLine, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import MissionDialog from "@/components/MissionDialog";
import heroImage from "@/assets/hero-museum.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pb-24">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Museum gallery with dramatic golden lighting"
            className="w-full h-full object-cover"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        {/* Info button */}
        <div className="absolute top-6 right-6 z-20">
          <MissionDialog />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-md mx-auto space-y-8">
          {/* Logo / Title */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Hand size={28} className="text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
              <span className="text-gold-gradient">Museum</span>{" "}
              <span className="text-foreground">Lens</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xs mx-auto leading-relaxed">
              Experience art through gestures. No clutter, no overload — just you and the art.
            </p>
          </div>

          {/* CTA */}
          <Link to="/scanner">
            <Button
              size="lg"
              className="gap-2 px-8 py-6 text-base font-semibold rounded-full glow-gold"
            >
              <ScanLine size={20} />
              Start Scanning
            </Button>
          </Link>

          {/* Gesture hints */}
          <div className="grid grid-cols-4 gap-4 pt-6">
            {[
              { gesture: "?", label: "Inquiry" },
              { gesture: "C", label: "Save" },
              { gesture: "☝", label: "Directions" },
              { gesture: "V", label: "Live" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full glass-surface flex items-center justify-center text-lg font-medium text-primary">
                  {item.gesture}
                </div>
                <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
