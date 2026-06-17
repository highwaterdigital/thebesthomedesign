import aboutBanner from "../../assets/about_banner-KnRtJoIC.webp";
import alaya1 from "../../assets/alaya_1-Bo1LBDbU.webp";
import alaya3 from "../../assets/alaya_3-Cn5uhS0X.webp";
import alaya5 from "../../assets/alaya_5-CKKTb1kv.webp";
import alaya8 from "../../assets/alaya_8-gswDAQ7T.webp";
import architectural from "../../assets/architectural-DfTRqFf9.webp";
import ceo from "../../assets/CEO-BxGw1GYQ.webp";
import commercial from "../../assets/commercial-gBtc_WHq.webp";
import heroSection from "../../assets/hero-section-DngWEFV4.mp4";
import house1 from "../../assets/house_of_lines_1-C5kdDKrW.webp";
import house2 from "../../assets/house_of_lines_2-DfN0HWTw.webp";
import house5 from "../../assets/house_of_lines_5-B03H93fX.webp";
import house7 from "../../assets/house_of_lines_7-DP3BiWzq.webp";
import interior from "../../assets/interior-Cc-7TXwb.webp";
import kalyan from "../../assets/kalyan-DtEOMrxB.webp";
import kishore from "../../assets/kishore-B9GpowXs.webp";
import rangavalli1 from "../../assets/rangavalli_1-D1SfGUG2.webp";
import rangavalli2 from "../../assets/rangavalli_2-BnGGRzQq.webp";
import rangavalli4 from "../../assets/rangavalli_4-D8yP85HG.webp";
import rangavalli9 from "../../assets/rangavalli_9-CeIxg5zj.webp";
import taaza1 from "../../assets/taaza-DTuR6nxL.webp";
import taaza2 from "../../assets/taaza_2-BeyHf_7G.webp";
import taaza4 from "../../assets/taaza_4-B_ck054s.webp";
import taaza7 from "../../assets/taaza_7-DkdG4B2Y.webp";

export const heroVideo = heroSection;

export const initialContent = {
  brand: {
    name: "The Best Home Design",
    shortName: "TBHD",
    tagline: "Construction and interior works across AP and Telangana",
    description:
      "A custom design-build studio for residential construction, interiors, renovations, commercial fit-outs, 2D and 3D planning, approvals support, and turnkey execution.",
    phone: "+91 94939 75999",
    whatsapp: "919493975999",
    email: "hello@thebesthomedesign.in",
    location: "Andhra Pradesh and Telangana",
    serviceArea: "Hyderabad, Vijayawada, Guntur, Vizag, Warangal, Khammam, and nearby regions",
  },
  seo: {
    title: "The Best Home Design | Construction and Interior Works in AP and Telangana",
    description:
      "Plan, build, renovate, and furnish homes with The Best Home Design. Construction, interiors, 2D and 3D designs, and turnkey execution across Andhra Pradesh and Telangana.",
    keywords:
      "home construction AP, interior designers Telangana, house planning Hyderabad, turnkey interiors Andhra Pradesh, The Best Home Design",
  },
  hero: {
    eyebrow: "Design. Build. Finish.",
    title: "Homes planned with clarity and delivered with site discipline.",
    body:
      "From first floor plan to final handover, TBHD brings construction, interiors, material coordination, and finishing under one accountable team.",
    primaryCta: "Start Project",
    secondaryCta: "View Services",
  },
  stats: [
    { value: "AP + TS", label: "Service region" },
    { value: "Turnkey", label: "Construction and interiors" },
    { value: "2D/3D", label: "Plans, elevations, walkthroughs" },
    { value: "End-to-end", label: "Design, site, finishing" },
  ],
  services: [
    {
      title: "Residential Construction",
      summary: "New home construction with planning, material guidance, site execution, and finishing coordination.",
      points: ["Floor plans and elevations", "Structural and civil coordination", "Site supervision", "Material and vendor planning"],
      image: architectural,
    },
    {
      title: "Interior Design",
      summary: "Functional interiors for kitchens, wardrobes, living rooms, bedrooms, and complete homes.",
      points: ["Space planning", "Modular kitchen and storage", "False ceiling and lighting", "Furniture and decor selection"],
      image: interior,
    },
    {
      title: "Renovation Works",
      summary: "Upgrade old homes, apartments, and commercial spaces with clear scope, phasing, and finish control.",
      points: ["Demolition and repair", "Flooring and painting", "Electrical and plumbing upgrades", "Before-after planning"],
      image: aboutBanner,
    },
    {
      title: "Commercial Fit-Outs",
      summary: "Practical, durable commercial interiors for offices, retail, hospitality, and service spaces.",
      points: ["Layout and flow", "Brand-led interiors", "Durable finishes", "Fast execution planning"],
      image: commercial,
    },
  ],
  process: [
    {
      title: "Site and Requirement Study",
      body: "We document plot or property conditions, family needs, budget priorities, timeline, and approval constraints.",
    },
    {
      title: "Concept and Cost Direction",
      body: "Plans, moodboards, 3D views, and scope options are prepared so design decisions and cost decisions happen together.",
    },
    {
      title: "Execution Planning",
      body: "Civil, electrical, plumbing, carpentry, lighting, and finishing work are sequenced before site activity accelerates.",
    },
    {
      title: "Handover and Support",
      body: "Final checks, punch lists, vendor coordination, and maintenance guidance are completed before handover.",
    },
  ],
  projects: [
    {
      title: "Contemporary Family Villa",
      slug: "contemporary-family-villa",
      category: "Construction",
      location: "Telangana",
      year: "2025",
      area: "4,800 sq. ft.",
      cover: rangavalli1,
      summary: "A residential construction and interior workflow planned around family routines, storage, light, and long-term maintenance.",
      gallery: [
        rangavalli2,
        rangavalli4,
        rangavalli9,
      ],
    },
    {
      title: "Urban Apartment Interiors",
      slug: "urban-apartment-interiors",
      category: "Interior Design",
      location: "Hyderabad",
      year: "2025",
      area: "1,850 sq. ft.",
      cover: alaya1,
      summary: "A compact apartment interior package with clean storage, warm finishes, lighting layers, and low-maintenance detailing.",
      gallery: [alaya3, alaya5, alaya8],
    },
    {
      title: "Premium Home Makeover",
      slug: "premium-home-makeover",
      category: "Renovation",
      location: "Andhra Pradesh",
      year: "2024",
      area: "3,200 sq. ft.",
      cover: house1,
      summary: "A full home upgrade covering layout improvement, finishes, lighting, custom furniture, and final styling.",
      gallery: [
        house2,
        house5,
        house7,
      ],
    },
    {
      title: "Restaurant Interior Fit-Out",
      slug: "restaurant-interior-fit-out",
      category: "Commercial",
      location: "Hyderabad",
      year: "2024",
      area: "5,000 sq. ft.",
      cover: taaza1,
      summary: "A durable commercial design approach for customer flow, fast service, brand recall, and practical site maintenance.",
      gallery: [taaza2, taaza4, taaza7],
    },
  ],
  testimonials: [
    {
      name: "Home Owner",
      location: "Hyderabad",
      quote:
        "The team explained every design and material decision clearly. The process felt organized from planning to final finishing.",
    },
    {
      name: "Villa Client",
      location: "Telangana",
      quote:
        "We wanted one team for construction and interiors. TBHD helped us avoid confusion between vendors and kept the site moving.",
    },
    {
      name: "Commercial Client",
      location: "Andhra Pradesh",
      quote:
        "The layout was practical, the finishes were durable, and the handover checklist made the final stage easier to track.",
    },
  ],
  team: [
    {
      name: "Project Lead",
      role: "Construction and Site Coordination",
      image: ceo,
    },
    {
      name: "Interior Lead",
      role: "Space Planning and Finishes",
      image: kalyan,
    },
    {
      name: "Design Support",
      role: "2D, 3D, and Vendor Drawings",
      image: kishore,
    },
  ],
  faqs: [
    {
      question: "Which locations do you serve?",
      answer: "The Best Home Design works across Andhra Pradesh and Telangana, including Hyderabad and major surrounding cities.",
    },
    {
      question: "Do you handle both construction and interiors?",
      answer: "Yes. The site is positioned around end-to-end construction, interior design, renovation, and commercial fit-out work.",
    },
    {
      question: "Can you prepare 2D and 3D designs before execution?",
      answer: "Yes. Floor plans, elevations, room layouts, material directions, and 3D views can be prepared before execution.",
    },
    {
      question: "Is this content final?",
      answer:
        "This is a structured custom-site draft. Once the current WordPress site is reachable, its exact contact details, testimonials, team, pages, and media can be imported into this content model.",
    },
  ],
};

export const categories = ["All", ...new Set(initialContent.projects.map((project) => project.category))];
