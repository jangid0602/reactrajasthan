export interface Speaker {
    id: number;
    name: string;
    role: string;
    company: string;
    imageUrl: string;
    bio: string;
    twitterUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    type?: string;
}

export interface Sponsor {
    id: number;
    name: string;
    tier: "gold" | "silver" | "bronze" | "community" | "partner" | "sponsor";
    logoUrl: string;
    websiteUrl: string;
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
    twitterUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
}

export interface VenueDetails {
    name: string;
    address: string;
    city: string;
    date: string;
    time: string;
    mapUrl: string;
    mapEmbed: string;
}

export interface GoogleUser {
    name: string;
    email: string;
    picture: string;
    [key: string]: any;
}

export interface AuthData {
    user: GoogleUser;
    token: string;
}

export interface EventType {
    id: string;
    title: string;
    date?: Date;
    venue?: VenueDetails;
    speakers: Speaker[];
    sponsors: Sponsor[];
    organizers: TeamMember[];
    volunteers: TeamMember[];
}
