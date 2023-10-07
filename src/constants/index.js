import {
    logo,
    safety,
    skilled,
    support,
    equipment,
    hero,
    construction,
    landscape,
    stones,
    gravel,
    soil,
} from '../assets';

const navLinks = [
    {
        id: "",
        title: "Home",
    },
    {
        id: "about-us",
        title: "About Us",
    },
    {
        id: "products",
        title: "Products",
    },
    {
        id: "contact-us",
        title: "Contact Us",
    },
];

const benefits = [
    {
        title: "24/7 Emergeny Support",
        paragraph: 'Emergency Roadside Assistance for quick response to breakdowns and emergencies',
        image: support,
        alt: "Support Vecotr"
    },
    {
        title: "Skilled Technician",
        paragraph: 'Skilled technicians trained in diagnosing and fixing mechanical, issues',
        image: skilled,
        alt: "Technician Vector"
    },
    {
        title: "Safety Checkup",
        paragraph: 'Advanced diagnostic to ensure your vehicle is safe for a long ride',
        image: safety,
        alt: "Safety Vector"
    },
    {
        title: "Equipment Replacement",
        paragraph: 'Parts sourcing and replacement to ensure timely repairs and minimize downtime',
        image: equipment,
        alt: "Equipment Vector"
    },
];

const services = [
    {
        title: "Landscaping",
        paragraph: 'Transforming Outdoor Spaces into Breathtaking Retreats with Our Exceptional Landscaping Services',
        image: landscape,
    },
    {
        title: "Construction",
        paragraph: 'Our Construction Services Forge Strong Foundations and Architectural Wonders Alike',
        image: construction,
    },
];

const materials = [
    {
        title: "Stone",
        paragraph: 'Experience the Unmatched Power of Tailore RTechnology.',
        image: stones,
    },
    {
        title: "Gravel ",
        paragraph: 'Experience the Unmatched Power of Tailore RTechnology.',
        image: gravel,
    },
    {
        title: "Soil  ",
        paragraph: 'Experience the Unmatched Power of Tailore RTechnology.',
        image: soil,
    },
];

export { services, materials, navLinks, benefits };