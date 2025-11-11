import { APP_LOGO } from "@/const";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const phoneNumber = "+39 800 940551";
  
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrizione */}
          <div>
            <img src={APP_LOGO} alt="Assistenza Vaillant Milano" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm opacity-90">
              Centro assistenza specializzato per caldaie Vaillant a Milano. 
              Tecnici certificati, pezzi originali, intervento rapido garantito.
            </p>
          </div>
          
          {/* Contatti */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{phoneNumber}</p>
                  <p className="text-sm opacity-75">Disponibile 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Milano e Provincia</p>
                  <p className="text-sm opacity-75">Intervento rapido in tutta l'area</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>info@assistenzavaillantmilano.it</p>
              </div>
            </div>
          </div>
          
          {/* Orari */}
          <div>
            <h3 className="font-bold text-lg mb-4">Orari di Servizio</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Emergenze 24/7</p>
                  <p className="text-sm opacity-75">Sempre disponibili per urgenze</p>
                </div>
              </div>
              <div className="text-sm opacity-90">
                <p className="font-semibold mb-2">Orario ufficio:</p>
                <p>Lun - Ven: 8:00 - 19:00</p>
                <p>Sabato: 9:00 - 13:00</p>
                <p>Domenica: Solo emergenze</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Assistenza Caldaie Vaillant Milano. Tutti i diritti riservati.</p>
          <p className="mt-2">Centro assistenza indipendente specializzato Vaillant - Non affiliato direttamente con Vaillant Group</p>
        </div>
      </div>
    </footer>
  );
}
