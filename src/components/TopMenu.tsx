import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
      <nav className="w-full flex items-center justify-end">
        <TopMenuItem label="Booking" href="/booking" />
        <div className="relative h-10 w-40">
          <Image
            src="/img/logo1.png"
            alt="Venue Explorer logo"
            fill
            className="object-contain w-10 h-10"
          />
        </div>
      </nav>
    </header>
  );
}
