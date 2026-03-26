import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

const MissionDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 rounded-full glass-surface text-muted-foreground hover:text-primary transition-colors">
          <Info size={18} />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-card border-border max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-gold-gradient">
            Our Mission
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            Museum Lens is designed for <span className="text-foreground font-medium">cognitive ease</span>. 
            We believe art should be experienced, not deciphered.
          </p>
          <p>
            Our gesture-based system replaces cluttered labels and dense plaques with 
            intuitive hand signals — giving you a <span className="text-foreground font-medium">simpler, 
            stress-free</span> way to explore.
          </p>
          <p>
            Whether you experience visual overload, have ADHD, dyslexia, or simply 
            prefer immersive experiences — Museum Lens puts the art first.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MissionDialog;
