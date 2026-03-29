import { useState } from "react";
import { Play, Pause, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import daliAtomicus from "@/assets/dali-atomicus.jpg";

const Insights = () => {
  const [audioState, setAudioState] = useState<"stopped" | "playing" | "paused">("stopped");

  return (
    <div className="min-h-screen flex flex-col items-center px-4 pt-6 pb-24">
      <div className="w-full max-w-md space-y-6">
        {/* Artwork image */}
        <div className="rounded-xl overflow-hidden border border-border">
          <img
            src={daliAtomicus}
            alt="Dali Atomicus (1948) by Philippe Halsman and Salvador Dalí"
            className="w-full h-auto"
            width={1280}
            height={960}
          />
        </div>

        {/* Caption with extra top spacing */}
        <div className="space-y-1 text-sm text-muted-foreground pt-2">
          <p>
            <span className="text-foreground font-medium">Title:</span> Dali Atomicus (1948) by Philippe Halsman &amp;
            Salvador Dalí
          </p>
          <p>
            <span className="text-foreground font-medium">License:</span>{" "}
            <a
              href="https://creativecommons.org/publicdomain/mark/1.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              PDM 1.0
            </a>{" "}
            via{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Salvador_Dali_A_(Dali_Atomicus)_09633u.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              Wikimedia Commons
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Audio Narration Controls */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground shrink-0">Audio Narration</span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-full border border-border ${
                audioState === "playing" ? "text-primary border-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setAudioState("playing")}
              aria-label="Play narration"
            >
              <Play size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-full border border-border ${
                audioState === "paused" ? "text-primary border-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setAudioState("paused")}
              aria-label="Pause narration"
            >
              <Pause size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-full border border-border ${
                audioState === "stopped" ? "text-primary border-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setAudioState("stopped")}
              aria-label="Stop narration"
            >
              <Square size={16} />
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Summary info */}
        <div className="space-y-5 pt-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Match Confidence</p>
            <p className="text-xl font-bold text-primary">96%</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Subject</p>
            <p className="text-foreground/80 leading-relaxed">
              Surreal collaboration exploring physical suspension and dynamic motion.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Key Fact</p>
            <p className="text-foreground/80 leading-relaxed">
              It took 28 attempts to capture this single, unedited photograph.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
