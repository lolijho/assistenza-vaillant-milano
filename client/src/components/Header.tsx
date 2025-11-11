import { APP_LOGO } from "@/const";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const phoneNumber = "+39 800 940551";
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="Assistenza Vaillant Milano" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-secondary">Assistenza Caldaie Vaillant</h1>
              <p className="text-sm text-muted-foreground">Milano e Provincia</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-sm text-muted-foreground">Chiamaci ora</p>
              <p className="text-xl font-bold text-secondary">{phoneNumber}</p>
            </div>
            <Button 
              size="lg" 
              className="gap-2"
              asChild
            >
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                <Phone className="h-5 w-5" />
                <span className="hidden sm:inline">Chiama Ora</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
