import { Speaker, Sponsor, TeamMember, VenueDetails, EventType } from "@/lib/types";
const shubham = "/assets/shubham.png";
const gaurav = "/assets/gaurav.png";
const kusum = "/assets/kusum.png";
const vansh = "/assets/vansh.png";
const uma = "/assets/uma.png";
const anil = "/assets/anil.png";
const himanshu_pahwa = "/assets/himanshu_pahwa.png";
const vaibhav = "/assets/vaibhav.png";
const kiran = "/assets/kiran.png";
const qaguides = "/assets/qaguides.jpg";
const flutterJaipur = "/assets/flutter square logowhite.png";
const womenTech = "/assets/women in tech conf.jpeg";
const reactDelhi = "/assets/React Delhi.png";
const krypton = "/assets/krypton.png";
const reactindore = "/assets/reactindore.png";
const wso2 = "/assets/wso2-logo.webp";
const gdg = "/assets/GDG On Campus - Centered - Poornima University.png";
const dilnawaz = "/assets/dilnawaz.png";
const ojas = "/assets/ojas.png";
const anubha = "/assets/anubha.png";
const zordial = "/assets/zordial3.png";
const harshita = "/assets/harshita.png";
const manjeet = "/assets/manjeet.png";
const priyanka = "/assets/priyanka.png";
const Tanishka = "/assets/Tanishka.png";
const himanshu = "/assets/himanshu.png";
const safal = "/assets/safal.png";
const grras = "/assets/grras.png";
const horizontal = "/assets/horizontal.svg";
const horizontalBg = "/assets/horizontal-bg.webp";

export const siteConfig = {
    name: "React Rajasthan",
    description: "The premier React community in Rajasthan, India",
    socialLinks: {
        Twitter: "https://x.com/react_rajasthan",
        LinkedIn: "https://www.linkedin.com/company/reactrajasthan",
        Instagram: "https://www.instagram.com/reactrajasthan",
        YouTube: "https://www.youtube.com/@ReactRajasthan",
        WhatsApp: "https://chat.whatsapp.com/KCMpUoo2AYfBAHTTYYIAAX",
    },
};

// const getEventsData = async () => {
//     try {
//         const res = axios.get("http://10.33.0.41:3000/api/events");
//         const { data } = await res;
//         console.log(data);
//         data.forEach((event: any) => {
//             if (event.date) {
//                 event.date = new Date(event.date);
//             }
//         });
//         return null;
//         return data;
//     } catch (error) {
//         console.error("Error fetching events data:", error);
//         return null;
//     }
// };

export const eventsData = [
    {
        id: "meetup#1",
        title: "Meetup #1",
        date: new Date("2025/07/20"),
        venue: {
            name: "Rajasthan International Centre",
            address: "Sansthan Path, JLN Marg, Jaipur - 302017",
            city: "Jaipur, Rajasthan",
            date: "July 20, 2025",
            time: "9:00 AM - 3:00 PM",
            mapUrl: "https://www.google.com/maps?ll=26.866866,75.819099&z=15&t=h&hl=en&gl=IN&mapclient=embed&cid=8335942949147421389",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4935.544777958819!2d75.8190989!3d26.866866399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db776ca78d045%3A0x73af37f24fdaaacd!2sRajasthan%20International%20Center!5e1!3m2!1sen!2sin!4v1747550682526!5m2!1sen!2sin",
        } as VenueDetails,
        speakers: [
            {
                id: 1,
                name: "Uma Shankar Arora",
                role: "Tech Entrepreneur",
                // company: "SevenX",
                imageUrl: uma,
                // bio: "...",
                // twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/usarora/",
                type: "general",
            },
            {
                id: 2,
                name: "Anil Pilania",
                role: "Managing Director",
                company: "MIDCAI",
                imageUrl: anil,
                // bio: "...",
                // twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/anilpilania/",
                type: "general",
            },
            {
                id: 3,
                name: "Vansh Kapoor",
                role: "Organizer",
                company: "React Delhi",
                imageUrl: vansh,
                // bio: "...",
                // twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/vansh-kapoor/",
                type: "general",
            },
            {
                id: 4,
                name: "Vaibhav Hapani",
                role: "Software Engineer",
                company: "WSO2",
                imageUrl: vaibhav,
                // bio: "...",
                // twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/vaibhav-hapani/",
                type: "general",
            },
            {
                id: 5,
                name: "Gaurav Kheterpal",
                role: "Founder & CEO",
                company: "Vanshiv Technologies",
                imageUrl: gaurav,
                // bio: "...",
                // twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/gauravkheterpal/",
                type: "panel",
            },
            {
                id: 6,
                name: "Shubham Gupta",
                role: "Associate Staff Engineer",
                company: "Nagarro",
                imageUrl: shubham,
                // bio: "...",
                // twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/shubhamguptag/",
                type: "panel",
            },
            {
                id: 7,
                name: "Himanshu Pahwa",
                role: "Senior Operations Manager",
                company: "Krytons Consultancy",
                imageUrl: himanshu_pahwa,
                // bio: "...",
                // twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/himanshu-pahwa-b0b011181/",
                type: "general",
            },
            {
                id: 8,
                name: "Dilnawaz Khan",
                role: "Founder",
                company: "Power Deck",
                imageUrl: dilnawaz,
                // bio: "...",
                // twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/dilnawazkhan/",
                type: "panel",
            },
            {
                id: 9,
                name: "Dr. Anubha Jain",
                role: "Director (CS & IT)",
                company: "IIS University",
                imageUrl: anubha,
                // bio: "...",
                // twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/dr-anubha-jain-14054117/",
                type: "panel",
            },
            {
                id: 10,
                name: "Harshita Chugh",
                role: "Senior QA",
                company: "Atrium",
                imageUrl: harshita,
                // bio: "...",
                // twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/harshitachugh/",
                type: "general",
            },
            {
                id: 11,
                name: "Manjeet Sharma",
                role: "Principal Software Engineer",
                company: "Vista",
                imageUrl: manjeet,
                // bio: "...",
                // twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/manjeet-sharma-b11756151/",
                type: "general",
            },
        ] as Speaker[],
        sponsors: [
            {
                id: 0,
                name: "Krytons",
                tier: "silver",
                logoUrl: krypton,
                websiteUrl: "https://www.linkedin.com/company/krytons/",
            },
            {
                id: 1,
                name: "Zordial",
                tier: "gold",
                logoUrl: zordial,
                websiteUrl: "https://zordial.com/",
            },
            {
                id: 2,
                name: "WSO2",
                tier: "silver",
                logoUrl: wso2,
                websiteUrl: "https://wso2.com/",
            },
            {
                id: 3,
                name: "Grras",
                tier: "bronze",
                logoUrl: grras,
                websiteUrl: "https://grras.com/",
            },
            {
                id: 4,
                name: "Codeup",
                tier: "partner",
                logoUrl: "https://codeup.in/static/media/full-logo-white.a0d780b267862c65f814.be096c910fa935ad915a.webp",
                websiteUrl: "https://codeup.in",
            },
            {
                id: 5,
                name: "The Codeup Show",
                tier: "partner",
                logoUrl: "https://show.codeup.in/assets/logo.png",
                websiteUrl: "https://show.codeup.in",
            },
            {
                id: 6,
                name: "React Delhi",
                tier: "community",
                logoUrl: reactDelhi,
                websiteUrl: "https://www.linkedin.com/company/react-delhi/",
            },
            {
                id: 7,
                name: "React Indore",
                tier: "community",
                logoUrl: reactindore,
                websiteUrl: "https://www.linkedin.com/company/datacode-in/",
            },
            {
                id: 8,
                name: "Google Developer Groups On Campus - Poornima University",
                tier: "community",
                logoUrl: gdg,
                websiteUrl: "https://in.linkedin.com/company/gdg-poornima",
            },
            {
                id: 9,
                name: "Flutter Jaaipur",
                tier: "community",
                logoUrl: flutterJaipur,
                websiteUrl: "https://www.linkedin.com/company/flutterjaipur/",
            },
            {
                id: 10,
                name: "WomenInTech Conf",
                tier: "community",
                logoUrl: womenTech,
                websiteUrl: "https://www.linkedin.com/company/womenintechconf/",
            },
            {
                id: 11,
                name: "Qaguides",
                tier: "community",
                logoUrl: qaguides,
                websiteUrl: "https://www.linkedin.com/in/abhinav-qaguides-19601a5/",
            },
            // {
            //   id: 6,
            //   name: 'Tech Innovators',
            //   tier: 'community',
            //   logoUrl: 'https://images.pexels.com/photos/533446/pexels-photo-533446.jpeg?auto=compress&cs=tinysrgb&w=600',
            //   websiteUrl: 'https://techinnovators.com',
            // },
        ] as Sponsor[],
        organizers: [
            {
                id: 1,
                name: "Shubham Gupta",
                role: "Lead organizer",
                imageUrl: shubham,
                twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/shubhamguptag/",
            },
            {
                id: 2,
                name: "Kusum Ketu",
                role: "Co organizer",
                imageUrl: kusum,
                linkedinUrl: "https://www.linkedin.com/in/kusum-ketu-0895b873/",
            },
            // {
            //   id: 3,
            //   name: 'Rajesh Kumar',
            //   role: 'Technical Coordinator',
            //   imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
            //   githubUrl: 'https://github.com/rajeshkumar',
            // },
        ] as TeamMember[],
        volunteers: [
            {
                id: 1,
                name: "Priyanka Jangid",
                role: "Speaker's POC",
                imageUrl: priyanka,
                linkedinUrl: "https://www.linkedin.com/in/priyankajangid0602/",
            },
            {
                id: 2,
                name: "Ojas Joshi",
                role: "Platform Handle",
                imageUrl: ojas,
                linkedinUrl: "https://www.linkedin.com/in/ojas-joshi-2184262b6/",
            },
            {
                id: 3,
                name: "Kiran Choudhary",
                role: "Registrations",
                imageUrl: kiran,
                linkedinUrl: "https://www.linkedin.com/in/kiran-choudhary-532251273/",
            },
            {
                id: 4,
                name: "Safal Goyal",
                role: "Logistics",
                imageUrl: safal,
                linkedinUrl: "https://www.linkedin.com/in/safal-goyal-197b3187/",
            },
            {
                id: 5,
                name: "Tanishka Gupta",
                role: "Host",
                imageUrl: Tanishka,
                linkedinUrl: "https://www.linkedin.com/in/tanishka-gupta-25b598368/",
            },
            {
                id: 6,
                name: "Himanshu Chandnani",
                role: "Platform handle",
                imageUrl: himanshu,
                linkedinUrl: "https://www.linkedin.com/in/himanshu-chandnani1/",
            },
        ] as TeamMember[],
    },

    // future/past events:
    {
        id: "meetup#2",
        title: "Meetup #2",
        date: new Date("2025/10/4"),
        venue: {
            name: "Celebal Technologies",
            address: "Celebal Technologies, 3rd Floor, A Wing, F-202, 204, RIICO Industrial Area, Mansarovar, Jaipur 302020",
            city: "Jaipur, Rajasthan",
            date: "Oct 4, 2025",
            time: "9:00 AM",
            mapUrl: "https://maps.app.goo.gl/P5K4xnvqdYvVr6s9A",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.8755236677044!2d75.77831746959897!3d26.834554995229784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f111b23517%3A0x937732f0f202924e!2sCelebal%20Technologies%20-%20Mansarovar%20Jaipur!5e1!3m2!1sen!2sin!4v1755840665148!5m2!1sen!2sin",
        },
        speakers: [],
        sponsors: [
            // {
            //     id: 0,
            //     name: "Krytons",
            //     tier: "silver",
            //     logoUrl: krypton,
            //     websiteUrl: "https://www.linkedin.com/company/krytons/",
            // },
            // {
            //     id: 1,
            //     name: "Zordial",
            //     tier: "gold",
            //     logoUrl: zordial,
            //     websiteUrl: "https://zordial.com/",
            // },
            // {
            //     id: 2,
            //     name: "WSO2",
            //     tier: "silver",
            //     logoUrl: wso2,
            //     websiteUrl: "https://wso2.com/",
            // },
            // {
            //     id: 3,
            //     name: "Grras",
            //     tier: "bronze",
            //     logoUrl: grras,
            //     websiteUrl: "https://grras.com/",
            // },
            {
                id: 4,
                name: "Codeup",
                tier: "partner",
                logoUrl: "https://codeup.in/static/media/full-logo-white.a0d780b267862c65f814.be096c910fa935ad915a.webp",
                websiteUrl: "https://codeup.in",
            },
            {
                id: 5,
                name: "The Codeup Show",
                tier: "partner",
                logoUrl: "https://show.codeup.in/assets/logo.png",
                websiteUrl: "https://show.codeup.in",
            },
            // {
            //     id: 6,
            //     name: "React Delhi",
            //     tier: "community",
            //     logoUrl: reactDelhi,
            //     websiteUrl: "https://www.linkedin.com/company/react-delhi/",
            // },
            // {
            //     id: 7,
            //     name: "React Indore",
            //     tier: "community",
            //     logoUrl: reactindore,
            //     websiteUrl: "https://www.linkedin.com/company/datacode-in/",
            // },
            // {
            //     id: 8,
            //     name: "Google Developer Groups On Campus - Poornima University",
            //     tier: "community",
            //     logoUrl: gdg,
            //     websiteUrl: "https://in.linkedin.com/company/gdg-poornima",
            // },
            // {
            //     id: 9,
            //     name: "Flutter Jaaipur",
            //     tier: "community",
            //     logoUrl: flutterJaipur,
            //     websiteUrl: "https://www.linkedin.com/company/flutterjaipur/",
            // },
            // {
            //     id: 10,
            //     name: "WomenInTech Conf",
            //     tier: "community",
            //     logoUrl: womenTech,
            //     websiteUrl: "https://www.linkedin.com/company/womenintechconf/",
            // },
            // {
            //     id: 11,
            //     name: "Qaguides",
            //     tier: "community",
            //     logoUrl: qaguides,
            //     websiteUrl: "https://www.linkedin.com/in/abhinav-qaguides-19601a5/",
            // },
            // {
            //   id: 6,
            //   name: 'Tech Innovators',
            //   tier: 'community',
            //   logoUrl: 'https://images.pexels.com/photos/533446/pexels-photo-533446.jpeg?auto=compress&cs=tinysrgb&w=600',
            //   websiteUrl: 'https://techinnovators.com',
            // },
        ] as Sponsor[],
        organizers: [
            {
                id: 1,
                name: "Shubham Gupta",
                role: "Lead organizer",
                imageUrl: shubham,
                twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/shubhamguptag/",
            },
            // {
            //     id: 2,
            //     name: "Kusum Ketu",
            //     role: "Co organizer",
            //     imageUrl: kusum,
            //     linkedinUrl: "https://www.linkedin.com/in/kusum-ketu-0895b873/",
            // },
            // {
            //   id: 3,
            //   name: 'Rajesh Kumar',
            //   role: 'Technical Coordinator',
            //   imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
            //   githubUrl: 'https://github.com/rajeshkumar',
            // },
        ] as TeamMember[],
        volunteers: [
            {
                id: 1,
                name: "Priyanka Jangid",
                role: "Speaker's POC",
                imageUrl: priyanka,
                linkedinUrl: "https://www.linkedin.com/in/priyankajangid0602/",
            },
            {
                id: 2,
                name: "Ojas Joshi",
                role: "Platform Handle",
                imageUrl: ojas,
                linkedinUrl: "https://www.linkedin.com/in/ojas-joshi-2184262b6/",
            },
            // {
            //     id: 3,
            //     name: "Kiran Choudhary",
            //     role: "Registrations",
            //     imageUrl: kiran,
            //     linkedinUrl: "https://www.linkedin.com/in/kiran-choudhary-532251273/",
            // },
            // {
            //     id: 4,
            //     name: "Safal Goyal",
            //     role: "Logistics",
            //     imageUrl: safal,
            //     linkedinUrl: "https://www.linkedin.com/in/safal-goyal-197b3187/",
            // },
            // {
            //     id: 5,
            //     name: "Tanishka Gupta",
            //     role: "Host",
            //     imageUrl: Tanishka,
            //     linkedinUrl: "https://www.linkedin.com/in/tanishka-gupta-25b598368/",
            // },
            {
                id: 6,
                name: "Himanshu Chandnani",
                role: "Platform handle",
                imageUrl: himanshu,
                linkedinUrl: "https://www.linkedin.com/in/himanshu-chandnani1/",
            },
        ] as TeamMember[],
    },
    {
        id: "meetup#3",
        title: "Meetup #3",
        date: new Date("2025/11/1"),
        backgroundImageUrl: horizontalBg,
        venue: {
            name: "Horizontal Digital",
            address: "Horizontal Digital, Mall of Jaipur, Gandhi Path, B Block, Vaishali Nagar, Jaipur, Rajasthan 302021",
            city: "Jaipur, Rajasthan",
            date: "Nov 1, 2025",
            time: "9:00 AM",
            mapUrl: "https://maps.app.goo.gl/6ENhnkKEd9YnzohX6",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4238.921785769346!2d75.73163397598638!3d26.906199460369475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9838f813e17%3A0x774746e24b7ea680!2sHorizontal%20Digital!5e1!3m2!1sen!2sin!4v1759813395794!5m2!1sen!2sin",
        },
        speakers: [],
        sponsors: [
            // {
            //     id: 0,
            //     name: "Krytons",
            //     tier: "silver",
            //     logoUrl: krypton,
            //     websiteUrl: "https://www.linkedin.com/company/krytons/",
            // },
            {
                id: 1,
                name: "Horizontal Digital",
                tier: "sponsor",
                logoUrl: horizontal,
                websiteUrl: "https://www.horizontaldigital.com",
            },
            // {
            //     id: 2,
            //     name: "WSO2",
            //     tier: "silver",
            //     logoUrl: wso2,
            //     websiteUrl: "https://wso2.com/",
            // },
            // {
            //     id: 3,
            //     name: "Grras",
            //     tier: "bronze",
            //     logoUrl: grras,
            //     websiteUrl: "https://grras.com/",
            // },
            {
                id: 4,
                name: "Codeup",
                tier: "partner",
                logoUrl: "https://codeup.in/static/media/full-logo-white.a0d780b267862c65f814.be096c910fa935ad915a.webp",
                websiteUrl: "https://codeup.in",
            },
            {
                id: 5,
                name: "The Codeup Show",
                tier: "partner",
                logoUrl: "https://show.codeup.in/assets/logo.png",
                websiteUrl: "https://show.codeup.in",
            },
            // {
            //     id: 6,
            //     name: "React Delhi",
            //     tier: "community",
            //     logoUrl: reactDelhi,
            //     websiteUrl: "https://www.linkedin.com/company/react-delhi/",
            // },
            // {
            //     id: 7,
            //     name: "React Indore",
            //     tier: "community",
            //     logoUrl: reactindore,
            //     websiteUrl: "https://www.linkedin.com/company/datacode-in/",
            // },
            // {
            //     id: 8,
            //     name: "Google Developer Groups On Campus - Poornima University",
            //     tier: "community",
            //     logoUrl: gdg,
            //     websiteUrl: "https://in.linkedin.com/company/gdg-poornima",
            // },
            // {
            //     id: 9,
            //     name: "Flutter Jaaipur",
            //     tier: "community",
            //     logoUrl: flutterJaipur,
            //     websiteUrl: "https://www.linkedin.com/company/flutterjaipur/",
            // },
            // {
            //     id: 10,
            //     name: "WomenInTech Conf",
            //     tier: "community",
            //     logoUrl: womenTech,
            //     websiteUrl: "https://www.linkedin.com/company/womenintechconf/",
            // },
            // {
            //     id: 11,
            //     name: "Qaguides",
            //     tier: "community",
            //     logoUrl: qaguides,
            //     websiteUrl: "https://www.linkedin.com/in/abhinav-qaguides-19601a5/",
            // },
            // {
            //   id: 6,
            //   name: 'Tech Innovators',
            //   tier: 'community',
            //   logoUrl: 'https://images.pexels.com/photos/533446/pexels-photo-533446.jpeg?auto=compress&cs=tinysrgb&w=600',
            //   websiteUrl: 'https://techinnovators.com',
            // },
        ] as Sponsor[],
        organizers: [
            {
                id: 1,
                name: "Shubham Gupta",
                role: "Organizer",
                imageUrl: shubham,
                twitterUrl: "https://twitter.com/shubhtt",
                linkedinUrl: "https://www.linkedin.com/in/shubhamguptag/",
            },
            {
                id: 2,
                name: "Uma Shankar Arora",
                role: "Co organizer",
                imageUrl: uma,
                linkedinUrl: "https://www.linkedin.com/in/usarora/",
            },
            {
                id: 3,
                name: "Ojas Joshi",
                role: "Co organizer",
                imageUrl: ojas,
                linkedinUrl: "https://www.linkedin.com/in/ojas-joshi-2184262b6/",
            },
        ] as TeamMember[],
        // volunteers: [
        //     {
        //         id: 1,
        //         name: "Priyanka Jangid",
        //         role: "Speaker's POC",
        //         imageUrl: priyanka,
        //         linkedinUrl: "https://www.linkedin.com/in/priyankajangid0602/",
        //     },
        //     {
        //         id: 2,
        //         name: "Ojas Joshi",
        //         role: "Platform Handle",
        //         imageUrl: ojas,
        //         linkedinUrl: "https://www.linkedin.com/in/ojas-joshi-2184262b6/",
        //     },
        //     // {
        //     //     id: 3,
        //     //     name: "Kiran Choudhary",
        //     //     role: "Registrations",
        //     //     imageUrl: kiran,
        //     //     linkedinUrl: "https://www.linkedin.com/in/kiran-choudhary-532251273/",
        //     // },
        //     // {
        //     //     id: 4,
        //     //     name: "Safal Goyal",
        //     //     role: "Logistics",
        //     //     imageUrl: safal,
        //     //     linkedinUrl: "https://www.linkedin.com/in/safal-goyal-197b3187/",
        //     // },
        //     // {
        //     //     id: 5,
        //     //     name: "Tanishka Gupta",
        //     //     role: "Host",
        //     //     imageUrl: Tanishka,
        //     //     linkedinUrl: "https://www.linkedin.com/in/tanishka-gupta-25b598368/",
        //     // },
        //     {
        //         id: 6,
        //         name: "Himanshu Chandnani",
        //         role: "Platform handle",
        //         imageUrl: himanshu,
        //         linkedinUrl: "https://www.linkedin.com/in/himanshu-chandnani1/",
        //     },
        // ] as TeamMember[],
    },
];
