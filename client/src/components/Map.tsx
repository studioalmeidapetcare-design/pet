import { cn } from "@/lib/utils";

interface MapViewProps {
  className?: string;
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
  onMapReady?: (map: any) => void;
}

export function MapView({
  className,
  initialCenter = { lat: -25.4542, lng: -49.2312 }, // Jardim das Américas, Curitiba
  initialZoom = 16,
}: MapViewProps) {
  // Coordenadas para o OpenStreetMap Iframe
  // O OSM usa um formato ligeiramente diferente para o link de exportação
  const bbox = `${initialCenter.lng - 0.005},${initialCenter.lat - 0.005},${initialCenter.lng + 0.005},${initialCenter.lat + 0.005}`;
  const marker = `${initialCenter.lat},${initialCenter.lng}`;
  
  // URL do Google Maps Embed (que funciona sem chave para visualização simples) ou OpenStreetMap
  // Vamos usar o Google Maps Embed sem chave que é mais familiar e geralmente funciona para IFRAMES simples
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.43342363564!2d${initialCenter.lng}!3d${initialCenter.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzE1LjEiUyA0OcKwMTMnNTIuMyJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr`;

  return (
    <div className={cn("w-full h-[500px] rounded-3xl overflow-hidden shadow-inner", className)}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={`https://maps.google.com/maps?q=${initialCenter.lat},${initialCenter.lng}&z=${initialZoom}&output=embed`}
        style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
        title="Localização Studio Almeida Pet Care"
      />
    </div>
  );
}
