import {
    safety,
    skilled,
    support,
    equipment,
    construction,
    landscape,
    stones,
    gravel,
    soil,
    Excavator,
    Driveways,
    SepticTank,
    image1,
    image2,
    image3,
    image4,
    image6,
    image7,
    image8,
    image9,
    lg,
    honda,
    cell,
    hyundai,
    motors,
    Redimix,
    Precast,

} from '../../assets';



const C_images = [
    {
        id: 1,
        images: lg,
    },
    {
        id: 2,
        images: honda,
    },
    {
        id: 3,
        images: cell,
    },
    {
        id: 4,
        images: hyundai,
    },
    {
        id: 5,
        images: motors,
    },

];


const benefits = [
    {
        id: 1,
        title: "24/7 Emergeny Support",
        paragraph: 'Emergency Roadside Assistance for quick response to breakdowns and emergencies',
        image: support,
        alt: "Support Vecotr"
    },
    {
        id: 2,
        title: "Skilled Technician",
        paragraph: 'Skilled technicians trained in diagnosing and fixing mechanical, issues',
        image: skilled,
        alt: "Technician Vector"
    },
    {
        id: 3,
        title: "Safety Checkup",
        paragraph: 'Advanced diagnostic to ensure your vehicle is safe for a long ride',
        image: safety,
        alt: "Safety Vector"
    },
    {
        id: 4,
        title: "Equipment Replacement",
        paragraph: 'Parts sourcing and replacement to ensure timely repairs and minimize downtime',
        image: equipment,
        alt: "Equipment Vector"
    },
];

const concretes = [
    {
        id: 'redi-mix-concrete',
        title: "Redi-Mix Concrete",
        paragraph: "Redi-Mix Excellence: Strength Tailored to Perfection",
        image: Redimix,
    },
    {
        id: 'pre-cast-concrete',
        title: "Pre-Cast Concrete",
        paragraph: "Pre-cast Concrete: Crafted Off-site, Built to Last On-site.",
        image: Precast,
    }
];

const services = [
    {
        id: "driveways",
        title: "Driveways",
        paragraph: 'Crafting durable driveways for lasting first impressions.',
        image: Driveways,
    },
    {
        id: "excavator-services",
        title: "Excavator Services",
        paragraph: 'Efficient excavation solutions for seamless construction projects.',
        image: Excavator,
    },
    {
        id: "septic-tank-installation",
        title: "Septic Tank Installation",
        paragraph: 'Expert septic solutions for worry-free installations.',
        image: SepticTank,
    },
];

const materials = [
    {
        id: 1,
        title: "Stone",
        paragraph: 'We Offer All Varieties of Stone for Your Construction and Landscaping Needs',
        image: stones,
    },
    {
        id: 2,
        title: "Gravel",
        paragraph: 'Explore Our Comprehensive Range of Gravel for Construction and Landscaping.',
        image: gravel,
    },
    {
        id: 3,
        title: "Soil",
        paragraph: 'Elevate Your Landscaping with Our Finest Screened Loam and Top Soil Selections.',
        image: soil,
    },
];

const Gallery1 = [
    {
        id: 1,
        img: image1,

    },
    {
        id: 2,
        img: image2,

    },
    {
        id: 3,
        img: image3,

    },

    {
        id: 4,
        img: image4,

    },
    {
        id: 7,
        img: image6,

    },
    {
        id: 8,
        img: image7,

    },

    {
        id: 9,
        img: image8,

    },
    {
        id: 10,
        img: image9,
    }
];

const Gallery2 = [
    {
        id: 11,
        img: image6,

    },
    {
        id: 12,
        img: image7,

    },

    {
        id: 13,
        img: image8,

    },
    {
        id: 14,
        img: image9,
    },
    {
        id: 15,
        img: image1,

    },
    {
        id: 16,
        img: image2,

    },
    {
        id: 17,
        img: image3,

    },

    {
        id: 18,
        img: image4,

    },
]

export {
    concretes,
    services,
    materials,
    benefits,
    Gallery1,
    Gallery2,
    C_images,
};