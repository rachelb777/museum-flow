import { useState, useRef, useEffect } from "react";
import { Play, Pause, Square, Bookmark, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import daliAtomicus from "@/assets/dali-atomicus.jpg";

const PLACEHOLDER_AUDIO_URL =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const Inquiry = () => {
  const [mode, setMode] = useState<"story" | "audio">("story");
  const [audioState, setAudioState] = useState<"stopped" | "playing" | "paused">("stopped");
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [saved, setSaved] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const audio = new Audio(PLACEHOLDER_AUDIO_URL);
    audioRef.current = audio;

    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
    audio.addEventListener("timeupdate", () => setProgress(audio.currentTime));
    audio.addEventListener("ended", () => {
      setAudioState("stopped");
      setProgress(0);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const handlePlay = () => {
    audioRef.current?.play();
    setAudioState("playing");
  };

  const handlePause = () => {
    audioRef.current?.pause();
    setAudioState("paused");
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setAudioState("stopped");
    setProgress(0);
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setProgress(value[0]);
    }
  };

  const handleSave = (e: React.MouseEvent) => {
    if (saved) return;
    e.preventDefault();
    setSaved(true);
    toast({ title: "Saved!", description: "Added to your Vault." });
    setTimeout(() => {
      // navigate via the link's default after toast shows
      const link = e.currentTarget as HTMLAnchorElement;
      link.click();
    }, 800);
  };

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col h-[100dvh] justify-start items-center px-4 pt-4 pb-16 overflow-hidden">
      <div className="w-full max-w-md flex flex-col flex-1 min-h-0">
        {/* Artwork image with gallery float effect */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-primary/40 max-h-[25vh] flex items-center justify-center bg-black/5">
          <img
            src={daliAtomicus}
            alt="Dali Atomicus (1948) by Philippe Halsman and Salvador Dalí"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Centered title & artist */}
        <div className="text-center space-y-0.5 pt-2">
          <h1 className="text-base font-bold text-foreground font-sans">
            Dali Atomicus
          </h1>
          <p className="text-xs italic text-muted-foreground">
            Philippe Halsman &amp; Salvador Dalí, 1948
          </p>
        </div>

        {/* Match Confidence */}
        <div className="text-center pt-1">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Match Confidence
          </p>
          <p className="text-lg font-bold text-primary leading-tight">96%</p>
        </div>

        {/* Pill toggle */}
        <div className="flex justify-center pt-1">
          <div className="inline-flex rounded-full bg-muted p-0.5 gap-0.5">
            <button
              onClick={() => setMode("story")}
              className={`px-4 py-1 rounded-full text-xs font-medium transition-colors ${
                mode === "story"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Story
            </button>
            <button
              onClick={() => setMode("audio")}
              className={`px-4 py-1 rounded-full text-xs font-medium transition-colors ${
                mode === "audio"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Audio
            </button>
          </div>
        </div>

        {/* Content area */}
        {mode === "story" ? (
          <div className="space-y-2 pt-2">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5 font-semibold">
                Subject
              </p>
              <p className="text-sm text-foreground/80 leading-snug">
                Surreal collaboration exploring physical suspension and dynamic motion.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5 font-semibold">
                Key Fact
              </p>
              <p className="text-sm text-foreground/80 leading-snug">
                It took 28 attempts to capture this single, unedited photograph.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground shrink-0">
                Audio Narration
              </span>
              <div className="flex items-center gap-0.5">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-7 w-7 rounded-full border border-border ${
                    audioState === "playing"
                      ? "text-primary border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={handlePlay}
                  aria-label="Play narration"
                >
                  <Play size={13} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-7 w-7 rounded-full border border-border ${
                    audioState === "paused"
                      ? "text-primary border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={handlePause}
                  aria-label="Pause narration"
                >
                  <Pause size={13} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-7 w-7 rounded-full border border-border ${
                    audioState === "stopped"
                      ? "text-primary border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={handleStop}
                  aria-label="Stop narration"
                >
                  <Square size={13} />
                </Button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-0.5">
              <Slider
                value={[progress]}
                max={duration || 100}
                step={0.5}
                onValueChange={handleSeek}
                className="w-full"
              />
              <div className="flex justify-between text-[9px] text-muted-foreground">
                <span>{formatTime(progress)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Save to Vault */}
        <div className="mt-2">
          <Link
            to="/collection"
            onClick={handleSave}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            {saved ? <Check size={16} /> : <Bookmark size={16} />}
            {saved ? "Saved!" : "Save to Vault"}
          </Link>
        </div>

        {/* Spacer to push footer down */}
        <div className="flex-1" />

        {/* Footer: License & attribution — absolute bottom */}
        <div className="text-center text-[9px] text-muted-foreground py-0.5">
          <p>
            License:{" "}
            <a
              href="https://creativecommons.org/publicdomain/mark/1.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              PDM 1.0
            </a>{" "}
            via{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Salvador_Dali_A_(Dali_Atomicus)_09633u.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Wikimedia Commons
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
