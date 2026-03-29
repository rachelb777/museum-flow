import { Bookmark } from "lucide-react";

const Collection = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-20">
    <div className="glass-surface rounded-2xl p-8 text-center max-w-sm space-y-4">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
        <Bookmark size={32} className="text-primary" />
      </div>
      <h1 className="font-display text-2xl font-semibold text-gold-gradient">My Vault</h1>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Vault is accessed by the <span className="text-primary font-medium">"V"</span> hand sign. Your saved art is in
        Saved Art. Browse the Genres and Artist Portfolio folders to dive deeper into the collection.
      </p>
    </div>
  </div>
);

export default Collection;
