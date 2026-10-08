import Image from "next/image";

type VenueDetail = {
  name: string;
  imgSrc: string;
};

const venueDetails = new Map<string, VenueDetail>([
  ["001", { name: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" }],
  ["002", { name: "Spark Space", imgSrc: "/img/sparkspace.jpg" }],
  ["003", { name: "The Grand Table", imgSrc: "/img/grandtable.jpg" }],
]);

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venue = venueDetails.get(vid);

  if (!venue) {
    return (
      <main className="px-6 py-16 text-center text-xl">Venue not found.</main>
    );
  }

  return (
    <main className="flex w-full flex-wrap items-center justify-center gap-8 px-6 py-16">
      <div className="relative h-[260px] w-[360px] overflow-hidden rounded-2xl border border-gray-400">
        <Image
          className="object-cover"
          src={venue.imgSrc}
          alt={venue.name}
          fill
        />
      </div>
      <h1 className="text-3xl font-bold">{venue.name}</h1>
    </main>
  );
}
