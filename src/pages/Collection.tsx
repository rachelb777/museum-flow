import { Bookmark } from "lucide-react";

const Collection = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-20">
    <div className="glass-surface rounded-2xl p-8 text-center max-w-sm space-y-4">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
        <Bookmark size={32} className="text-primary" />
      </div>
      <h1 className="font-display text-2xl font-semibold text-gold-gradient">My Vault</h1>
      <p className="text-sm text-muted-foreground leading-relaxed">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The <strong>Vault</strong> is your personal archive, accessed by the <strong>"V"</strong> hand sign. Visit
            your saved art in <strong>Gallery</strong>, explore the <strong>Artist Portfolio</strong> to see more of
            your artists' works, or discover similar styles in <strong>Genre Discovery</strong>.
          </p>
        </p>
      </p>
    </div>
  </div>
);

export default Collection;
