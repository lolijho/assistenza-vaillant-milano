import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandsSection from "@/components/BrandsSection";
import Gallery from "@/components/Gallery";
import { 
  Phone, 
  Clock, 
  Shield, 
  Wrench, 
  CheckCircle2, 
  Award,
  Zap,
  ThumbsUp,
  MapPin
} from "lucide-react";

// Dichiarazione per la funzione gtag definita in index.html
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export default function Home() {
  const phoneNumber = "+39 800 940551";
  
  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const telUrl = `tel:${phoneNumber.replace(/\s/g, '')}`;
    if (typeof window.gtag_report_conversion !== 'undefined') {
      window.gtag_report_conversion(telUrl);
    } else {
      window.location.href = telUrl;
    }
  };

  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Riparazione e Manutenzione",
      description: "Interventi di riparazione e manutenzione ordinaria e straordinaria su caldaie Vaillant, Hermann, Baxi, Immergas, Riello e Viessmann. Diagnosi accurata e risoluzione rapida dei problemi.",
      image: "/service-repair.png"
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Pronto Intervento 24/7",
      description: "Servizio di emergenza disponibile 24 ore su 24, 7 giorni su 7. Intervento garantito entro 6-8 ore dalla chiamata, risoluzione in 24 ore.",
      image: "/service-emergency.png"
    },
    {
      icon: <CheckCircle2 className="h-12 w-12 text-primary" />,
      title: "Controllo e Certificazione",
      description: "Controlli periodici obbligatori, rilascio certificazioni di conformità e bollino blu. Manutenzione preventiva per garantire efficienza e sicurezza.",
      image: "/service-maintenance.png"
    }
  ];

  const advantages = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Intervento Rapido",
      description: "6-8 ore dalla chiamata"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Pezzi Originali",
      description: "Solo ricambi certificati Vaillant"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Tecnici Certificati",
      description: "Esperti specializzati Vaillant"
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Garanzia Totale",
      description: "Su tutti gli interventi"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white py-20 md:py-32"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        >
          <div className="absolute inset-0 bg-secondary/80"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-primary text-primary-foreground border-0">
                Specializzati Caldaie Vaillant
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Assistenza Caldaie Vaillant Milano
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Centro specializzato in caldaie Vaillant. Assistenza anche per Hermann, Baxi, Immergas, Riello e Viessmann. 
                Intervento rapido entro 6-8 ore, risoluzione garantita in 24 ore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg gap-2 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a 
                    href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    onClick={handleCallClick}
                  >
                    <Phone className="h-5 w-5" />
                    Chiama {phoneNumber}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20"
                  asChild
                >
                  <a href="#servizi">
                    Scopri i Servizi
                  </a>
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-10 w-10 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg">6-8 ore</p>
                    <p className="text-sm text-white/80">Tempo di intervento</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-10 w-10 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg">24 ore</p>
                    <p className="text-sm text-white/80">Risoluzione problemi</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-10 w-10 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg">100%</p>
                    <p className="text-sm text-white/80">Pezzi originali</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marchi Supportati */}
        <BrandsSection />

        {/* Vantaggi */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perché Sceglierci</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Centro assistenza multimarca indipendente specializzato in Vaillant, Hermann, Baxi, Immergas, Riello e Viessmann
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      {advantage.icon}
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                    <CardDescription className="text-base">{advantage.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Servizi */}
        <section id="servizi" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Servizi</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Assistenza completa per caldaie di tutte le marche: dalla manutenzione ordinaria alle emergenze
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6 flex justify-center bg-muted/30">
                    <img src={service.image} alt={service.title} className="h-32 w-32 object-contain" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      {service.icon}
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certificazioni */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">Certificazioni e Garanzie</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Centro Indipendente Certificato</p>
                        <p className="text-sm text-muted-foreground">Tutte le autorizzazioni necessarie per operare</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Tecnici Multimarca Specializzati</p>
                        <p className="text-sm text-muted-foreground">Esperti in Vaillant, Hermann, Baxi, Immergas, Riello, Viessmann</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Solo Pezzi Originali</p>
                        <p className="text-sm text-muted-foreground">Ricambi certificati per tutte le marche trattate</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Garanzia su Tutti gli Interventi</p>
                        <p className="text-sm text-muted-foreground">Qualità e affidabilità garantite</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-center">
                      <strong>Nota importante:</strong> Siamo un centro assistenza multimarca indipendente specializzato in caldaie 
                      Vaillant, Hermann, Baxi, Immergas, Riello e Viessmann, con tutte le certificazioni e competenze necessarie 
                      per garantire un servizio di altissima qualità su tutte le marche trattate.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Galleria Fotografica */}
        <Gallery />

        {/* Area di Servizio */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Area di Servizio</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Operiamo in tutta Milano e provincia con intervento rapido garantito
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Milano e Provincia</h3>
                      <p className="text-muted-foreground mb-4">
                        Copriamo tutta l'area metropolitana di Milano e provincia. 
                        Il nostro servizio di pronto intervento garantisce la presenza di un tecnico 
                        entro 6-8 ore dalla chiamata in qualsiasi zona dell'area servita.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>Milano Centro</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>Zona Nord</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>Zona Sud</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>Zona Est</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>Zona Ovest</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>Hinterland</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hai Bisogno di Assistenza per la Tua Caldaia?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contattaci ora per un intervento rapido e professionale. 
              I nostri tecnici sono pronti ad aiutarti!
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg gap-2"
              asChild
            >
              <a 
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                onClick={handleCallClick}
              >
                <Phone className="h-5 w-5" />
                Chiama {phoneNumber}
              </a>
            </Button>
            <p className="mt-6 text-sm opacity-75">
              Disponibili 24/7 per emergenze • Intervento entro 6-8 ore • Risoluzione in 24 ore
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
