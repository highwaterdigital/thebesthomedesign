import logo from "../../assets/tbhd/The-Best-Home-Design-Asset-2.png";
import heroHome from "../../assets/tbhd/The-Best-Home-Design-3.jpg";
import furnitureImage from "../../assets/tbhd/The-Best-Home-Design-4.jpg";
import lightingImage from "../../assets/tbhd/The-Best-Home-Design-9.jpg";
import floorPlanImage from "../../assets/tbhd/The-Best-Home-Design-12.jpg";
import furnishingImage from "../../assets/tbhd/The-Best-Home-Design-13.jpg";
import theatreImage from "../../assets/tbhd/The-Best-Home-Design-21.jpg";
import sudheer from "../../assets/tbhd/1.-Sudheer-Rayinutala-Director.png";
import karthik from "../../assets/tbhd/2.-Karthik-Architect-Civil-Engineer.png";
import sai from "../../assets/tbhd/3.-SaiArchitect-and-Interior-Designer.png";
import sunny from "../../assets/tbhd/4.-Sunny-Marketing-Manager.png";
import rakesh from "../../assets/tbhd/5.-Rakesh-Tiles-Contractor.png";
import naveen from "../../assets/tbhd/naveen.png";
import villa22A from "../../assets/tbhd/The-Best-Home-Design-Villa-22-1-scaled.jpg";
import villa22B from "../../assets/tbhd/The-Best-Home-Design-Villa-22-2-scaled.jpg";
import villa22C from "../../assets/tbhd/The-Best-Home-Design-Villa-22-3-scaled.jpg";
import villa54A from "../../assets/tbhd/The-Best-Home-Design-Villa-54-1-scaled.jpg";
import villa54B from "../../assets/tbhd/The-Best-Home-Design-Villa-54-2.jpg";
import villa55A from "../../assets/tbhd/The-Best-Home-Design-Villa-55-1-scaled.jpg";
import villa44A from "../../assets/tbhd/The-Best-Home-Design-Villa-44-1.jpg";
import homeHeroVideo from "../../assets/tbhd/TBHD HOME HERO V1.MP4";

export const heroVideo = homeHeroVideo;

const testimonialQuote =
  "I absolutely loved their design and their products. Their work speaks for themselves. This is the best design team any business can ask for. They are reliable, provide amazingly quick service and will listen carefully to their clients. I would definitely recommend them to all of my coworkers and friends.";

export const initialContent = {
  brand: {
    name: "The Best Home Design",
    shortName: "TBHD",
    logo,
    tagline: "Build Dream Home",
    description:
      "From interior designing, decorating and creating custom furniture, The Best Home Design provides the services needed to create the perfect home.",
    phone: "+91 81850 59738",
    whatsapp: "918185059738",
    email: "TheBestHomeDsgn@gmail.com",
    location: "Eluru",
    serviceArea: "Eluru, Andhra Pradesh, Telangana, and nearby regions",
  },
  seo: {
    title: "The Best Home Design | Build Dream Home",
    description:
      "The Best Home Design helps you design your dream home with interior design, custom furniture, lighting, floor planning, furnishing, and execution services.",
    keywords:
      "The Best Home Design, interior design Eluru, custom furniture, floor planning, home furnishing, Andhra Pradesh interiors, Telangana interiors",
  },
  hero: {
    eyebrow: "Welcome to The Best Home Design",
    title: "We help you design your dream home.",
    body:
      "Our professional and experienced interior designers create homes with style, comfort, and practical planning.",
    primaryCta: "Explore Services",
    secondaryCta: "View Portfolio",
    image: heroHome,
  },
  stats: [
    { value: "0+", label: "Happy Clients" },
    { value: "0+", label: "Years In Business" },
    { value: "0+", label: "Successful Projects" },
    { value: "Eluru", label: "Studio Address" },
  ],
  services: [
    {
      title: "Furniture & Decor",
      summary: "Create customized home and office furniture that fits the room, usage, and finish palette.",
      points: ["Custom furniture", "Residential and commercial use", "Decor coordination", "Finish selection"],
      image: furnitureImage,
    },
    {
      title: "Lighting",
      summary: "Brighten rooms with custom lighting plans that support mood, function, and architectural detail.",
      points: ["Room lighting plans", "Feature lighting", "Ceiling and wall lighting", "Fixture guidance"],
      image: lightingImage,
    },
    {
      title: "Floor Planning",
      summary: "Make the best use of space with planning concepts that reflect your theme and style.",
      points: ["Space planning", "Layout concepts", "Room flow", "Theme and style alignment"],
      image: floorPlanImage,
    },
    {
      title: "Home Furnishing",
      summary: "Bring the final layer together with furnishings that make the space complete and comfortable.",
      points: ["Furniture placement", "Soft furnishings", "Decor styling", "Home setup"],
      image: furnishingImage,
    },
  ],
  process: [
    {
      title: "Concept",
      body: "First we come up with a concept that reflects your themes and style.",
    },
    {
      title: "Idea",
      body: "The design idea is shaped around how the home should look, feel, and function.",
    },
    {
      title: "Design",
      body: "Layouts, finishes, furniture, lighting, and details are organized into a clear design direction.",
    },
    {
      title: "Execution",
      body: "The approved design is translated into site work, furniture, furnishing, and handover.",
    },
  ],
  projects: [
    {
      title: "Mudunuri's Duplex House",
      slug: "mudunuris-duplex-house",
      category: "Portfolio",
      location: "Andhra Pradesh",
      year: "2024",
      area: "Residential Duplex",
      cover: villa22A,
      summary: "A duplex house portfolio entry migrated from the WordPress portfolio page.",
      gallery: [villa22A, villa22B, villa22C],
    },
    {
      title: "Lalitha's Home",
      slug: "lalithas-home",
      category: "Home Interior",
      location: "Andhra Pradesh",
      year: "2024",
      area: "Residential Home",
      cover: villa54A,
      summary: "A residential home portfolio entry represented with downloaded TBHD project imagery.",
      gallery: [villa54A, villa54B, furnishingImage],
    },
    {
      title: "KMR Duplex House",
      slug: "kmr-duplex-house",
      category: "Duplex Design",
      location: "Andhra Pradesh",
      year: "2024",
      area: "Residential Duplex",
      cover: villa55A,
      summary: "A duplex design portfolio entry from the WordPress portfolio content.",
      gallery: [villa55A, villa44A, floorPlanImage],
    },
    {
      title: "Custom Home Theatre",
      slug: "custom-home-theatre",
      category: "Custom Interior",
      location: "Eluru",
      year: "2024",
      area: "Interior Design",
      cover: theatreImage,
      summary: "A featured custom interior project from the current WordPress homepage.",
      gallery: [theatreImage, lightingImage, furnitureImage],
    },
  ],
  testimonials: [
    {
      name: "Adivi Krishna",
      location: "MPP Kaikaluru",
      quote: testimonialQuote,
    },
    {
      name: "Dulam Vinay",
      location: "Youth Leader",
      quote: testimonialQuote,
    },
    {
      name: "Dulam Phani Syam",
      location: "Youth Leader",
      quote: testimonialQuote,
    },
  ],
  team: [
    {
      name: "Sudheer R",
      role: "Director",
      image: sudheer,
    },
    {
      name: "Karthik",
      role: "Architect & Civil Engineer",
      image: karthik,
    },
    {
      name: "Sai",
      role: "Architect & Interior Designer",
      image: sai,
    },
    {
      name: "Sunny",
      role: "Marketing Manager",
      image: sunny,
    },
    {
      name: "Rakesh",
      role: "Tiles Contractor",
      image: rakesh,
    },
    {
      name: "Naveen",
      role: "Manager",
      image: naveen,
    },
  ],
  faqs: [
    {
      question: "What services does The Best Home Design offer?",
      answer:
        "The WordPress site lists interior designing, decorating, custom furniture, furniture and decor, lighting, floor planning, and home furnishing.",
    },
    {
      question: "Where is the company address?",
      answer: "The current WordPress contact page lists the address as Eluru.",
    },
    {
      question: "How can customers contact the team?",
      answer: "The current WordPress contact page lists TheBestHomeDsgn@gmail.com and +91 81850 59738.",
    },
  ],
  imports: {
    sourceSite: "https://thebesthomedesign.in",
    fetchedPages: ["Home", "About", "Contact", "Portfolio", "Blog"],
    fetchedOn: "2026-06-17",
  },
};

export const categories = ["All", ...new Set(initialContent.projects.map((project) => project.category))];
