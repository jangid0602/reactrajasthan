import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { eventsData } from "@/data/siteData";

export default function Page() {
  const venue = eventsData[0].venue;
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold">Venue</h1>
        <div className="mt-6 space-y-3">
          <p className="text-white/80"><b>{venue.name}</b>, {venue.address}, {venue.city}</p>
          <p className="text-white/70">{venue.date} — {venue.time}</p>
          <a className="text-brand-pink" href={venue.mapUrl} target="_blank">Open map</a>
          <div className="mt-6 rounded-2xl overflow-hidden">
            <iframe
              src={venue.mapEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
