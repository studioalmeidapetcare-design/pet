import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

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
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${initialCenter.lat},${initialCenter.lng}`;

  return (
    <div className={cn("relative aspect-[1.7] h-auto w-full overflow-hidden rounded-3xl shadow-inner", className)}>
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
      <a
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 text-left shadow-[0_10px_26px_rgba(15,69,63,0.2)] backdrop-blur-sm transition hover:bg-white sm:inset-x-5 sm:bottom-5"
        aria-label="Abrir endereço da Luppy Pet Care Jardim no Google Maps"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--luppy-forest)] text-[var(--luppy-gold)]">
          <MapPin size={19} />
        </span>
        <span className="min-w-0">
          <strong className="block truncate text-sm text-[var(--luppy-forest)]">Luppy Pet Care Jardim</strong>
          <small className="mt-0.5 block truncate text-xs text-[var(--luppy-muted)]">Jardim das Américas · Curitiba – PR</small>
        </span>
      </a>
    </div>
  );
}
