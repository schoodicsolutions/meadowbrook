const navLinks = [
    {
        id: "/",
        title: "Home",
    },
    {
        id: "/about-us",
        title: "About Us",
    },
    {
        id: '/products/concrete',
        title: "Concrete",
        submenu: [
            {
                id: '/products/concrete/redi-mix-concrete',
                title: 'Redi-Mix Concrete'
            },
            {
                id: '/concrete#precast',
                title: 'Pre-Cast Concrete'
            }
        ]
    },
    {
        id: '/#',
        title: "Construction",
        submenu: [
            {
                id: '/products/construction/driveways',
                title: 'Driveways'
            },
            {
                id: '/products/construction/culverts',
                title: 'Culverts'
            },
            {
                id: '/products/construction/dump-trucks',
                title: 'Dump Trucks'
            },
            {
                id: '/products/construction/excavator-services',
                title: 'Excavator Services'
            },
            {
                id: '/products/construction/septic-tanks',
                title: 'Septic Tanks'
            }
        ]
    },
    {
        id: '/#',
        title: "Materials",
        submenu: [
            {
                id: '/products/stones',
                title: "Stones",
            },
            {
                id: '/products/gravel',
                title: "Gravel",
            },
            {
                id: '/products/soil',
                title: "Soil",
            },
        ],
    },
    {
        id: '/careers',
        title: "Careers",
    },
    {
        id: "/contact-us",
        title: "Contact Us",
    },
];

const ProductLinks = [
    {
        id: 'stones',
        title: "Stone"
    },
    {
        id: 'gravel',
        title: "Gravel"
    },
    {
        id: 'soil',
        title: "Soil"
    },
    {
        id: 'landscaping',
        title: "Landscaping",

    },
    {
        id: 'construction',
        title: "Construction"
    }
]

const Blogs = [
    {
        id: 1,
        link: "/",
        title: "How to get easist and cheapest quality of marble",
    },
    {
        id: 2,
        link: "/",
        title: "10 Ways to start the construction business in no time",
    },
    {
        id: 3,
        link: "/",
        title: "5 myths busters in Landscaping Service",
    },
    {
        id: 4,
        link: "/",
        title: "Top 11 ways to back out the old building",
    },
]

export {
    navLinks,
    ProductLinks,
    Blogs
};