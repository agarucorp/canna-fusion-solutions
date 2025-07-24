import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Botón flotante de WhatsApp
const whatsappButtonStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  zIndex: 1000,
  background: 'none',
  boxShadow: 'none',
  border: 'none',
  width: 'auto',
  height: 'auto',
  padding: 0,
  display: 'block',
  cursor: 'pointer',
};

// Sombra y transición para el logo
const whatsappImgStyle: React.CSSProperties = {
  width: 56,
  height: 56,
  boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
  borderRadius: '50%',
  transition: 'transform 0.18s cubic-bezier(.4,1.3,.6,1)',
  background: 'none',
  display: 'block',
};

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
        {/* Botón flotante de WhatsApp con sombra y hover */}
        <a
          href="https://wa.me/595984299188"
          target="_blank"
          rel="noopener noreferrer"
          style={whatsappButtonStyle}
          aria-label="WhatsApp"
          onMouseOver={e => { const img = e.currentTarget.querySelector('img'); if(img) img.style.transform = 'scale(1.13)'; }}
          onMouseOut={e => { const img = e.currentTarget.querySelector('img'); if(img) img.style.transform = 'scale(1)'; }}
        >
          <img src="/WhatsApp.png" alt="WhatsApp" style={whatsappImgStyle} />
        </a>
      </QueryClientProvider>
    </>
  );
}

export default App;
