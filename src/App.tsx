import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Creations from "./pages/Creations";
import Aide from "./pages/Aide";
import CGV from "./pages/CGV";
import LayerCakes from "./pages/creations/LayerCakes";
import NumberCakes from "./pages/creations/NumberCakes";
import Cupcakes from "./pages/creations/Cupcakes";
import Sables from "./pages/creations/Sables";
import Cookies from "./pages/creations/Cookies";
import PopCakes from "./pages/creations/PopCakes";
import Allergenes from "./pages/aide/Allergenes";
import Transport from "./pages/aide/Transport";
import Conservation from "./pages/aide/Conservation";
import Devis from "./pages/aide/Devis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/creations/layer-cakes" element={<LayerCakes />} />
          <Route path="/creations/number-cakes" element={<NumberCakes />} />
          <Route path="/creations/cupcakes" element={<Cupcakes />} />
          <Route path="/creations/sables" element={<Sables />} />
          <Route path="/creations/cookies" element={<Cookies />} />
          <Route path="/creations/pop-cakes" element={<PopCakes />} />
          <Route path="/aide" element={<Aide />} />
          <Route path="/aide/allergenes" element={<Allergenes />} />
          <Route path="/aide/transport" element={<Transport />} />
          <Route path="/aide/conservation" element={<Conservation />} />
          <Route path="/aide/devis" element={<Devis />} />
          <Route path="/cgv" element={<CGV />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;