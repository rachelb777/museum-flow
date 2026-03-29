import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Scan = lazy(() => import("./pages/Scan"));
const Insights = lazy(() => import("./pages/Insights"));
const Vault = lazy(() => import("./pages/Vault"));
const Map = lazy(() => import("./pages/Map"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Navbar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
