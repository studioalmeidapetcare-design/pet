import { cn } from "@/lib/utils";

interface MapViewProps {
  className?: string;
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
  onMapReady?: (map: any) => void;
}

export function MapView({
  className,
  initialCenter = { lat: -25.4719619, lng: -49.2280487 }, // Almeida Studio Pet Care - Jardim das Américas
  initialZoom = 16,
}: MapViewProps) {
  // Usando o link de embed exato gerado a partir do Google Maps para o local específico
  // O parâmetro 'q' com o nome do local ajuda o Google a mostrar o pin correto
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1672627448!2d-49.23023738545934!3d-25.471961883768224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce546214dbf77%3A0xedda7d3baa50ba4e!2sAlmeida%20Studio%20Pet%20Care%20-%20Jardim%20das%20Am%C3%A9ricas!5e0!3m2!1spt-BR!2sbr!4v1713830000000!5m2!1spt-BR!2sbr`;

  return (
    <div className={cn("w-full h-[500px] rounded-3xl overflow-hidden shadow-inner", className)}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
        style={{ border: 0 }}
        title="Localização Studio Almeida Pet Care"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
