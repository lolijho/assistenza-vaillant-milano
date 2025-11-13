import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { APP_LOGO } from "@/const";
import { 
  Phone, 
  Clock, 
  Shield, 
  Wrench, 
  CheckCircle2, 
  Award,
  Zap,
  ThumbsUp,
  MapPin,
  Flame,
  Settings,
  LifeBuoy
} from "lucide-react";

// Header personalizzato per la pagina Vaillant
function VaillantHeader() {
  const phoneNumber = "+39 800 940551";
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="Centro Assistenza M Milano" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[#22a08f]">Centro Assistenza M</h1>
              <p className="text-sm font-semibold text-[#22a08f]/80">Assistenza Caldaie Vaillant</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-sm text-muted-foreground">Chiamaci ora</p>
              <p className="text-xl font-bold text-[#22a08f]">{phoneNumber}</p>
            </div>
            <Button 
              size="lg" 
              className="gap-2 bg-[#22a08f] hover:bg-[#1d8f7f]"
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

export default function Vaillant() {
  const phoneNumber = "+39 800 940551";

  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-[#22a08f]" />,
      title: "Riparazione Caldaie",
      description: "Interventi specializzati di riparazione su tutti i modelli di caldaie Vaillant, Hermann, Baxi e altre marche. Tecnici specializzati, diagnosi accurata e risoluzione rapida dei problemi con pezzi di ricambio originali.",
      image: "/service-repair.png"
    },
    {
      icon: <Settings className="h-12 w-12 text-[#22a08f]" />,
      title: "Manutenzione Ordinaria",
      description: "Manutenzione periodica obbligatoria per caldaie di tutte le marche. Controllo completo, pulizia, verifica fumi e rilascio bollino blu. Mantieni la tua caldaia efficiente e sicura.",
      image: "/service-maintenance.png"
    },
    {
      icon: <LifeBuoy className="h-12 w-12 text-[#22a08f]" />,
      title: "Pronto Intervento 24/7",
      description: "Servizio di emergenza disponibile 24 ore su 24, 7 giorni su 7 per caldaie di tutte le marche. Intervento garantito entro 6-8 ore dalla chiamata, risoluzione in 24 ore.",
      image: "/service-emergency.png"
    }
  ];

  const advantages = [
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Specialisti Vaillant",
      description: "Esperienza approfondita su Vaillant"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ricambi Originali",
      description: "Pezzi certificati per tutte le marche"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Intervento Rapido",
      description: "6-8 ore dalla chiamata"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Tecnici Specializzati",
      description: "Competenza multimarca"
    }
  ];

  const vaillantModels = [
    "ecoTEC",
    "ecoTEC plus",
    "ecoTEC pro",
    "turboTEC",
    "atmoTEC",
    "ecoFIT",
    "geoTHERM",
    "aroTHERM"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <VaillantHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative text-white py-20 md:py-32"
          style={{
            background: `linear-gradient(135deg, #22a08f 0%, #1d8f7f 50%, #188c7d 100%)`,
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        >
          <div className="absolute inset-0 bg-[#22a08f]/85"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white text-[#22a08f] border-0 font-bold">
                Centro Specializzato
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Assistenza Caldaie Vaillant Milano
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/95">
                Il tuo centro di riferimento a Milano specializzato in caldaie Vaillant. 
                Assistenza anche per Hermann, Baxi, Immergas, Riello e Viessmann. Intervento rapido garantito in 6-8 ore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg gap-2 bg-white text-[#22a08f] hover:bg-white/90"
                  asChild
                >
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
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
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Clock className="h-10 w-10 text-white flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg">6-8 ore</p>
                    <p className="text-sm text-white/90">Tempo di intervento</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle2 className="h-10 w-10 text-white flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg">24 ore</p>
                    <p className="text-sm text-white/90">Risoluzione problemi</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Shield className="h-10 w-10 text-white flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg">100%</p>
                    <p className="text-sm text-white/90">Ricambi originali</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modelli Vaillant Supportati */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#22a08f]">
                Modelli Vaillant Supportati
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Assistenza specializzata per tutta la gamma di caldaie Vaillant e altre marche
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {vaillantModels.map((model, index) => (
                <Card key={index} className="text-center border-2 border-[#22a08f]/20 hover:border-[#22a08f] transition-colors">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-[#22a08f]">
                      Vaillant {model}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vantaggi */}
        <section className="py-16 bg-[#22a08f]/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perché Scegliere Noi per la Tua Caldaia</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Centro specializzato in caldaie Vaillant e altre marche a Milano
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center border-2 border-[#22a08f]/20 hover:border-[#22a08f] transition-colors">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-[#22a08f]/10 rounded-full w-fit text-[#22a08f]">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Servizi Specializzati</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Assistenza completa per caldaie Vaillant, Hermann, Baxi e altre marche: dalla manutenzione ordinaria alle emergenze
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-[#22a08f]/20">
                  <div className="p-6 flex justify-center bg-[#22a08f]/5">
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
        <section className="py-16 bg-[#22a08f]/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-[#22a08f]/30">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-[#22a08f]/10 rounded-full w-fit">
                    <Award className="h-12 w-12 text-[#22a08f]" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">Centro Abilitato ad Operare su Tutte le Caldaie</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#22a08f] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Tecnici Specializzati Multimarca</p>
                        <p className="text-sm text-muted-foreground">Competenza su Vaillant, Hermann, Baxi e altre marche</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#22a08f] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Ricambi Originali</p>
                        <p className="text-sm text-muted-foreground">Pezzi certificati per tutte le marche</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#22a08f] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Strumenti Diagnostici Professionali</p>
                        <p className="text-sm text-muted-foreground">Attrezzatura professionale multimarca</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#22a08f] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Garanzia su Interventi</p>
                        <p className="text-sm text-muted-foreground">Qualità e affidabilità su tutte le marche</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-[#22a08f]/10 rounded-lg border border-[#22a08f]/30">
                    <p className="text-sm text-center">
                      <strong className="text-[#22a08f]">Centro specializzato:</strong> Esperienza pluriennale 
                      su caldaie Vaillant, con tecnici formati direttamente dal produttore per garantire 
                      il massimo livello di competenza e professionalità.
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
        <section className="py-16 bg-[#22a08f]/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Area di Servizio</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Assistenza caldaie multimarca in tutta Milano e provincia
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border-[#22a08f]/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="h-8 w-8 text-[#22a08f] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Milano e Provincia</h3>
                      <p className="text-muted-foreground mb-4">
                        Copriamo tutta l'area metropolitana di Milano e provincia per assistenza caldaie multimarca (Vaillant, Hermann, Baxi e altre). 
                        Il nostro servizio di pronto intervento garantisce la presenza di un tecnico specializzato 
                        entro 6-8 ore dalla chiamata in qualsiasi zona dell'area servita.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#22a08f]" />
                          <span>Milano Centro</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#22a08f]" />
                          <span>Zona Nord</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#22a08f]" />
                          <span>Zona Sud</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#22a08f]" />
                          <span>Zona Est</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#22a08f]" />
                          <span>Zona Ovest</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#22a08f]" />
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
        <section className="py-16 bg-[#22a08f] text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hai Bisogno di Assistenza per la Tua Caldaia?
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Contattaci ora per un intervento rapido e professionale. 
              I nostri tecnici specializzati in Vaillant, Hermann, Baxi e altre marche sono pronti ad aiutarti!
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg gap-2 bg-white text-[#22a08f] hover:bg-white/90"
              asChild
            >
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                <Phone className="h-5 w-5" />
                Chiama {phoneNumber}
              </a>
            </Button>
            <p className="mt-6 text-sm opacity-90">
              Disponibili 24/7 per emergenze • Intervento entro 6-8 ore • Risoluzione in 24 ore
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

