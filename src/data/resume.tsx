import {Icons} from "@/components/icons";
import {HomeIcon, NotebookIcon} from "lucide-react";
import {ReactLight} from "@/components/ui/svgs/reactLight";
import {NextjsIconDark} from "@/components/ui/svgs/nextjsIconDark";
import {Typescript} from "@/components/ui/svgs/typescript";
import {Nodejs} from "@/components/ui/svgs/nodejs";
import {Python} from "@/components/ui/svgs/python";
import {Golang} from "@/components/ui/svgs/golang";
import {Postgresql} from "@/components/ui/svgs/postgresql";
import {Docker} from "@/components/ui/svgs/docker";
import {Kubernetes} from "@/components/ui/svgs/kubernetes";
import {Java} from "@/components/ui/svgs/java";
import {Csharp} from "@/components/ui/svgs/csharp";

export const DATA_COMMON = {
    name: "Jean-Luc Oudart--Sintes",
    initials: "JO",
    url: "https://polarisdev.fr",
    avatarUrl: "/me.jpeg",
    skills: [
        {name: "TypeScript", icon: Typescript},
        {name: "Node.js", icon: Nodejs},
        {name: "Next.js", icon: NextjsIconDark},
        {name: "React", icon: ReactLight},
        {name: "Java", icon: Java},
        {name: "C++", icon: Csharp},
        {name: "Docker", icon: Docker},
        {name: "Kubernetes", icon: Kubernetes},
        {name: "PostgreSQL", icon: Postgresql},
        {name: "Linux", icon: null},
        {name: "Proxmox VE", icon: null},
        {name: "AWS", icon: null},
        {name: "CI/CD", icon: null},
        {name: "Shell", icon: null},
        {name: "Lua", icon: null},
    ],
    contact: {
        email: "fullgreen.gn@proton.me",
        tel: "+33663203473",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/FullGreenGN",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/jeanluc-odtsts",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "#",
                icon: Icons.x,
                navbar: false,
            },
            Youtube: {
                name: "Youtube",
                url: "#",
                icon: Icons.youtube,
                navbar: false,
            },
            email: {
                name: "Send Email",
                url: "mailto:fullgreen.gn@proton.me",
                icon: Icons.email,
                navbar: true,
            },
        },
    },
    projects: [],
    hackathons: [],
} as const;

export const DATA_LANG = {
    fr: {
        location: "Perpignan, FR",
        locationLink: "https://www.google.com/maps/place/perpignan",
        description:
            "Développeur Full-Stack & SRE. Recherche une alternance en Administration Système Réseaux et Cybersécurité afin d'intégrer l'ESN 81.",
        summary:
            "Passionné par Linux et la sécurité, j'ai appris le système, le réseau et le développement en autodidacte. Aujourd'hui étudiant en cybersécurité et fondateur de PolarisDEV, je crée des environnements informatiques haute disponibilité et hautement sécurisés.",
        navbar: [
            {href: "/", icon: HomeIcon, label: "Accueil"},
            {href: "/blog", icon: NotebookIcon, label: "Blog"},
        ],
        work: [
            {
                company: "PolarisDEV",
                href: "https://polarisdev.fr",
                badges: [],
                location: "À distance",
                title: "Fondateur & Ingénieur Infrastructure Principal",
                logoUrl: "/polaris.svg",
                start: "Août 2024",
                end: "Présent",
                description:
                    "Conception d'architectures résilientes et déploiement de stacks de production (Next.js, Node.js, K8s).",
            },
            {
                company: "Auchan Retail",
                href: "#",
                badges: ["Stage"],
                location: "Perpignan",
                title: "Correspondant Informatique Local",
                logoUrl: "/auchan.png",
                start: "Mai 2025",
                end: "Juillet 2025",
                description:
                    "Maintenance infrastructure locale et support IT.",
            },
            {
                company: "Signpost",
                href: "#",
                badges: [],
                location: "Belgique",
                title: "Technicien",
                logoUrl: "/signpost.jpeg",
                start: "Mars 2024",
                end: "Mars 2024",
                description:
                    "Interventions techniques système et matériel en Belgique.",
            },
            {
                company: "Auchan Retail",
                href: "#",
                badges: ["Stage"],
                location: "Perpignan",
                title: "Correspondant Informatique Local",
                logoUrl: "/auchan.png",
                start: "Novembre 2023",
                end: "Décembre 2023",
                description:
                    "Support et gestion de parc informatique.",
            },
            {
                company: "42 Perpignan",
                href: "#",
                badges: ["Stage"],
                location: "Perpignan",
                title: "Stage Développeur FullStack",
                logoUrl: "/42.png",
                start: "Mai 2023",
                end: "Juin 2023",
                description:
                    "Développement web et intégration de services.",
            },
        ],
        education: [
            {
                school: "Lycée Pablo Picasso",
                href: "#",
                degree: "BTS Cybersécurité et Informatique (CIEL) Option A",
                logoUrl: "/picasso.png",
                start: "Septembre 2024",
                end: "Juin 2026",
            },
            {
                school: "Sainte Louise De Marillac",
                href: "#",
                degree: "BAC Professionnel Informatique et Réseaux (SN) - Mention Bien",
                logoUrl: "/marillac.jpeg",
                start: "Septembre 2020",
                end: "Juin 2024",
            },
            {
                school: "ANSSI",
                href: "https://secnumacademie.gouv.fr/",
                degree: "MOOC SecNumacadémie",
                logoUrl: "/anssi.png",
                start: "2025",
                end: "2025",
            }
        ],
        projects: [
            {
                title: "ShotEat",
                href: "https://shoteat.live",
                dates: "2026 - Présent",
                active: true,
                description: "Marketplace B2B2C spécialisée pour les festivals et grands événements. Architecture micro-services utilisant Next.js et Expo, avec une gestion financière atomique via Stripe Connect pour les paiements multi-vendeurs.",
                technologies: ["Next.js", "Expo", "tRPC", "Prisma", "PostgreSQL", "Stripe Connect", "Docker"],
                links: [{ type: "Site Web", href: "https://shoteat.live", icon: <Icons.globe className="size-3" /> }],
                image: "/projects/shoteat.png", // Ensure you have this image in your public folder
                video: "",
            },
            {
                title: "Infrastructure Plugiit",
                href: "https://plugiit.com",
                dates: "Juin 2026",
                active: true,
                description: "Déploiement complet d'une infrastructure dédiée sur OVH. Mise en place d'un hyperviseur Proxmox avec stockage ZFS, sécurisation avancée et automatisation du déploiement via Coolify.",
                technologies: ["Proxmox VE", "Debian", "Coolify", "Docker", "Traefik", "ZFS"],
                links: [{type: "Site Web", href: "https://plugiit.com", icon: <Icons.globe className="size-3"/>}],
                image: "",
                video: "",
            }
        ]
    },
    en: {
        location: "Perpignan, FR",
        locationLink: "https://www.google.com/maps/place/perpignan",
        description:
            "Full-Stack Developer & SRE. Looking for an apprenticeship in Systems, Networks Administration and Cybersecurity to join ESN 81.",
        summary:
            "Passionate about Linux and security, I taught myself system administration, networking, and development. Today, as a cybersecurity student and founder of PolarisDEV, I design highly available and highly secure IT environments.",
        navbar: [
            {href: "/", icon: HomeIcon, label: "Home"},
            {href: "/blog", icon: NotebookIcon, label: "Blog"},
        ],
        work: [
            {
                company: "PolarisDEV",
                href: "https://polarisdev.fr",
                badges: [],
                location: "Remote",
                title: "Founder & Lead Infrastructure Engineer",
                logoUrl: "/polaris.svg",
                start: "August 2024",
                end: "Present",
                description:
                    "Designing resilient architectures and deploying production stacks (Next.js, Node.js, K8s).",
            },
            {
                company: "Auchan Retail",
                href: "#",
                badges: ["Internship"],
                location: "Perpignan",
                title: "Local IT Correspondent",
                logoUrl: "/auchan.png",
                start: "May 2025",
                end: "July 2025",
                description:
                    "Local infrastructure maintenance and IT support.",
            },
            {
                company: "Signpost",
                href: "#",
                badges: [],
                location: "Belgium",
                title: "Technician",
                logoUrl: "/signpost.jpeg",
                start: "March 2024",
                end: "March 2024",
                description:
                    "Technical systems and hardware interventions in Belgium.",
            },
            {
                company: "Auchan Retail",
                href: "#",
                badges: ["Internship"],
                location: "Perpignan",
                title: "Local IT Correspondent",
                logoUrl: "/auchan.png",
                start: "November 2023",
                end: "December 2023",
                description:
                    "IT fleet support and management.",
            },
            {
                company: "42 Perpignan",
                href: "#",
                badges: ["Internship"],
                location: "Perpignan",
                title: "FullStack Developer Intern",
                logoUrl: "/42.png",
                start: "May 2023",
                end: "June 2023",
                description:
                    "Web development and integration of services.",
            },
        ],
        education: [
            {
                school: "Lycée Pablo Picasso",
                href: "#",
                degree: "Associate's Degree in Cybersecurity and IT (CIEL) - Option A",
                logoUrl: "/picasso.png",
                start: "September 2024",
                end: "June 2026",
            },
            {
                school: "Sainte Louise De Marillac",
                href: "#",
                degree: "Vocational High School Diploma in Computer Science and Networks (SN) - Graduated with Honors",
                logoUrl: "/marillac.jpeg",
                start: "September 2020",
                end: "June 2024",
            },
            {
                school: "ANSSI",
                href: "https://secnumacademie.gouv.fr/",
                degree: "SecNumacadémie MOOC",
                logoUrl: "/anssi.png",
                start: "2025",
                end: "2025",
            }
        ],
        projects: [
            {
                title: "ShotEat",
                href: "https://shoteat.live",
                dates: "2026 - Present",
                active: true,
                description: "B2B2C marketplace platform tailored for festivals and large-scale events. Features a micro-services architecture using Next.js and Expo, with atomic financial management powered by Stripe Connect for multi-vendor settlements.",
                technologies: ["Next.js", "Expo", "tRPC", "Prisma", "PostgreSQL", "Stripe Connect", "Docker"],
                links: [{ type: "Website", href: "https://shoteat.live", icon: <Icons.globe className="size-3" /> }],
                image: "/shoteat.png",
                video: "",
            },
            {
                title: "Plugiit Infrastructure",
                href: "https://plugiit.com",
                dates: "June 2026",
                active: true,
                description: "Full deployment of a dedicated infrastructure on OVH. Implementation of a Proxmox hypervisor with ZFS storage, advanced security hardening, and automated deployment via Coolify.",
                technologies: ["Proxmox VE", "Debian", "Coolify", "Docker", "Traefik", "ZFS"],
                links: [{ type: "Website", href: "https://plugiit.com", icon: <Icons.globe className="size-3" /> }],
                image: "",
                video: "",
            },
        ],
    }
} as const;

export const DATA = {
    ...DATA_COMMON,
    ...DATA_LANG.fr,
} as const;