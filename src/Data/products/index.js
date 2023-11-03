import {
    LsService1,
    LsService2,
    LsService3,
    LsService4,
    CsService1,
    CsService2,
    CsService3,
    CsService4,
    CsService5,
    CsService6,
    CsService7,
    Inch_0_25,
    Inch_1_25,
    BrickBlock,
    RipRap,

} from '../../assets'


const landscaping = [
    {
        id: "stump-grinding",
        root: "landscape service",
        image: LsService1,
        title: "stump grinding",
    },
    {
        id: 'tree-removal',
        root: "landscape service",
        image: LsService2,
        title: "tree removal",
    },
    {
        id: "land-lot-clearing",
        root: "landscape service",
        image: LsService3,
        title: "land lot clearing",
    },
    {
        id: "retaining-walls",
        root: "landscape service",
        image: LsService4,
        title: "retaining walls",
    },
]

const construction = [
    {
        id: 'concrete-supply',
        root: "construction service",
        image: CsService1,
        title: "Concrete Supply",
    },
    {
        id: 'foundations',
        root: "construction service",
        image: CsService2,
        title: "Foundations",
    },
    {
        id: 'driveways',
        root: "construction service",
        image: CsService3,
        title: "Driveways",
    },
    {
        id: 'culverts',
        root: "construction service",
        image: CsService4,
        title: "Culverts",
    },
    {
        id: 'dump-trucks',
        root: "construction service",
        image: CsService5,
        title: "Dump Trucks",
    },
    {
        id: 'excavator-services',
        root: "construction service",
        image: CsService6,
        title: "Excavator Services",
    },
    {
        id: 'septic-tank-installation',
        root: "construction service",
        image: CsService7,
        title: "Septic Tank Installation",
    },
]

const stones = [
    {
        id: "inch-3-4",
        root: "Stones",
        image: Inch_0_25,
        title: "3/4 Inch Stones",
    },
    {
        id: 'inch-1-12',
        root: "Stones",
        image: Inch_1_25,
        title: "1 1/2 Inch Stones",
    },
    {
        id: "rip-rap",
        root: "Stones",
        image: RipRap,
        title: "Rip Rap",
    },
    {
        id: "brick-block",
        root: "Stones",
        image: BrickBlock,
        title: "Brick Blocks",
    },
]

const headlines = [
    {
        id: "stump-grinding",
        heading: "Mastering Stump Grinding: Reclaiming Your Outdoor Space",
    },
    {
        id: "tree-removal",
        heading: "Tree Removal: Crafting More Beautiful Landscape"
    },
    {
        id: "land-lot-clearing",
        heading: "The Art of Land and Lot Clearing"
    },
    {
        id: "retaining-walls",
        heading: "The Magic of Retaining Walls"
    },
    {
        id: 'concrete-supply',
        heading: "Concrete Supply Made Easy: Your Foundation for Success",
    },
    {
        id: 'foundations',
        heading: "Solid Foundations: Building the Future Foundations",
    },
    {
        id: 'driveways',
        heading: "Crafting Stunning Driveways That Welcome You Home",
    },
    {
        id: 'culverts',
        heading: "Culverts: Water Management, Nature's Way",
    },
    {
        id: 'dump-trucks',
        heading: "Dump Trucks: Hauling Progress, One Load at a Time",
    },
    {
        id: 'excavator-services',
        heading: "Unearthing the Potential of Excavator Services",
    },
    {
        id: 'septic-tank-installation',
        heading: "Septic Tank Installation: A Cleaner, Greener Way Forward",
    },
    {
        id: "inch-3-4",
        heading: "3/4 Inch Stone: Small Size, Big Impact in Construction"
    },
    {
        id: 'inch-1-12',
        heading: "1 1/2 Inch Stone: Building on a Strong Foundation"
    },
    {
        id: 'rip-rap',
        heading: "Rip Rap: Nature's Armor Against Erosion",
    },
]


export {
    landscaping,
    construction,
    headlines,
    stones,
}