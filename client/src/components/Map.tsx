import { cn } from "@/lib/utils";

interface MapViewProps {
  className?: string;
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
  onMapReady?: (map: any) => void;
}

export function MapView({
  className,
  initialCenter = { lat: -25.4719619, lng: -49.2280487 },
  initialZoom = 16,
}: MapViewProps) {
  // Usa as coordenadas do Jardim das Américas para evitar o cartão antigo da marca anterior.
  const mapUrl = `https://www.google.com/maps?q=${initialCenter.lat},${initialCenter.lng}&z=${initialZoom}&output=embed`;

  return (
    <div className={cn("aspect-[1.7] h-auto w-full overflow-hidden rounded-3xl shadow-inner", className)}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
        style={{ border: 0, display: "block" }}
        title="Localização Luppy Pet Care Jardim - Jardim das Américas"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
