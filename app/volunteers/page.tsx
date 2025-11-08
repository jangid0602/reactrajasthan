import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MemberCard } from "@/components/Cards";
import { eventsData } from "@/data/siteData";

export default function Page() {
  const event = eventsData[0];
  const items = event.volunteers;
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold">Volunteers</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {items.map((item:any) => <MemberCard key={item.id} m={item} />)}
        </div>
      </section>
      <Footer />
    </main>
  );
}
