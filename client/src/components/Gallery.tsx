import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent } from "./ui/dialog";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  description: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      src: "/gallery-1.jpg",
      alt: "Installazione caldaia Vaillant",
      description: "Installazione professionale di caldaia Vaillant a Milano"
    },
    {
      src: "/gallery-2.jpg",
      alt: "Manutenzione caldaia Baxi",
      description: "Controllo diagnostico su caldaia Baxi con strumenti professionali"
    },
    {
      src: "/gallery-3.jpg",
      alt: "Team tecnici al lavoro",
      description: "I nostri tecnici collaborano per risolvere problemi complessi"
    },
    {
      src: "/gallery-4.jpg",
      alt: "Riparazione caldaia Viessmann",
      description: "Sostituzione componenti con ricambi originali Viessmann"
    },
    {
      src: "/gallery-5.jpg",
      alt: "Ispezione caldaia Immergas",
      description: "Controllo annuale e manutenzione preventiva caldaia Immergas"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Interventi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guarda i nostri tecnici esperti al lavoro su caldaie di tutte le marche
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
              onClick={() => setSelectedImage(image)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm font-medium">
                      {image.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  aria-label="Chiudi"
                >
                  <X className="h-6 w-6" />
                </button>
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="w-full h-auto"
                />
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold mb-2">{selectedImage.alt}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
