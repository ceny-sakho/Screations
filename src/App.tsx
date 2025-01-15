import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
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
import Commander from "./pages/aide/Commander";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <BlogProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
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
              <Route path="/aide/commander" element={<Commander />} />
              <Route path="/cgv" element={<CGV />} />
            </Routes>
            <Toaster />
            <Sonner />
          </BlogProvider>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;