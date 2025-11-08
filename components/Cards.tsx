import Image from "next/image";
import Link from "next/link";
import { Speaker, Sponsor, TeamMember } from "@/lib/types";

export function SpeakerCard({ s }: { s: Speaker }){
  return (
    <div className="rounded-2xl border border-white/10 p-4">
      <div className="relative h-48 w-full overflow-hidden rounded-xl">
        <Image src={s.imageUrl} alt={s.name} fill className="object-cover"/>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold">{s.name}</h3>
        <p className="text-sm text-white/70">{s.role}{s.company ? `, ${s.company}` : ""}</p>
        {s.linkedinUrl && <Link href={s.linkedinUrl} target="_blank" className="text-xs text-brand-pink">LinkedIn</Link>}
      </div>
    </div>
  )
}

export function SponsorCard({ sp }: { sp: Sponsor }){
  return (
    <a href={sp.websiteUrl} target="_blank" className="rounded-2xl border border-white/10 p-5 bg-white/5 hover:bg-white/10 flex items-center justify-center">
      <Image src={sp.logoUrl} alt={sp.name} width={160} height={60}/>
    </a>
  )
}

export function MemberCard({ m }: { m: TeamMember }){
  return (
    <div className="rounded-2xl border border-white/10 p-4">
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image src={m.imageUrl} alt={m.name} fill className="object-cover"/>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold">{m.name}</h3>
        <p className="text-sm text-white/70">{m.role}</p>
      </div>
    </div>
  )
}
