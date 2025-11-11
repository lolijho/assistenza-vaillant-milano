import { Card, CardContent } from "./ui/card";

export default function BrandsSection() {
  const brands = [
    { name: "Vaillant", color: "text-[#E3000F]" },
    { name: "Hermann", color: "text-secondary" },
    { name: "Baxi", color: "text-secondary" },
    { name: "Immergas", color: "text-secondary" },
    { name: "Riello", color: "text-secondary" },
    { name: "Viessmann", color: "text-secondary" }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-muted/50 to-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Marchi Supportati</h2>
          <p className="text-muted-foreground">
            Assistenza specializzata per le migliori marche di caldaie
          </p>
        </div>
        
        <Card className="border-2">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {brands.map((brand, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className={`text-xl md:text-2xl font-bold ${brand.color}`}>
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
