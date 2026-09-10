import { Icon } from "./Icon";

// Sağ altta sabit duran WhatsApp baloncuğu. Numara panelden yönetilen iletişim
// telefonundan gelir; telefon boşsa baloncuk hiç basılmaz.
// Sağ alt köşede ScrollTop butonu da var, o bunun üstünde konumlanır.
export function WhatsAppBubble({ number, label }: { number: string; label: string }) {
  if (!number) return null;
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1DA851] hover:shadow-xl"
    >
      <Icon name="whatsapp" className="size-7" />
    </a>
  );
}
