import { MapPin } from "lucide-react";

const Wayfinding = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-20">
    <div className="glass-surface rounded-2xl p-8 text-center max-w-sm space-y-4">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
        <MapPin size={32} className="text-primary" />
      </div>
      <h1 className="font-display text-2xl font-semibold text-gold-gradient">Wayfinding</h1>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Triggered by the <span className="text-primary font-medium">"☝"</span> pointed finger gesture. 
        Directions and museum navigation will be displayed here.
      </p>
    </div>
  </div>
);

export default Wayfinding;
