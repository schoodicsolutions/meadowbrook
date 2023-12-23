import {
    LsService3,
    LsService4,
    CsService1,
    CsService3,
    CsService4,
    CsService5,
    CsService6,
    CsService7,
    Inch_0_25,
    Inch_1_25,
    BrickBlock,
    RipRap,
    BanRunGravel,
    Inch_2_Screened,
    Inch_4_Screened,
    ScreenedLoam,
    ScreenedTopSoil,
    RediMix,
    PreCast

} from '../../assets'

const landscaping = [

]

const construction = [
    {
        id: 'concrete-supply',
        root: "construction",
        image: CsService1,
        title: "Concrete Supply",
    },
    {
        id: 'driveways',
        root: "construction",
        image: CsService3,
        title: "Driveways",
    },
    {
        id: 'culverts',
        root: "construction",
        image: CsService4,
        title: "Culverts",
    },
    {
        id: 'dump-trucks',
        root: "construction",
        image: CsService5,
        title: "Dump Trucks",
    },
    {
        id: 'excavator-services',
        root: "construction",
        image: CsService6,
        title: "Excavator Services",
    },
    {
        id: 'septic-tank-installation',
        root: "construction",
        image: CsService7,
        title: "Septic Tank Installation",
    },
    {
        id: "land-lot-clearing",
        root: "construction",
        image: LsService3,
        title: "land lot clearing",
    },
    {
        id: "retaining-walls",
        root: "construction",
        image: LsService4,
        title: "retaining walls",
    },
]

const stones = [
    {
        id: "inch-3-4",
        root: "stones",
        image: Inch_0_25,
        title: "3/4 Inch Stones",
    },
    {
        id: 'inch-1-12',
        root: "stones",
        image: Inch_1_25,
        title: "1 1/2 Inch Stones",
    },
    {
        id: "rip-rap",
        root: "stones",
        image: RipRap,
        title: "Rip Rap",
    },
    {
        id: "concrete-waste-blocks",
        root: "stones",
        image: BrickBlock,
        title: "Concrete Waste Blocks",
    },
]

const gravel = [
    {
        id: "bank-run-gravel",
        root: "gravel",
        image: BanRunGravel,
        title: "Bank Run Gravel",
    },
    {
        id: 'inch-2-screened-gravel',
        root: "gravel",
        image: Inch_2_Screened,
        title: "2 Inch Screened Gravel",
    },
    {
        id: 'inch-4-screened-gravel',
        root: "gravel",
        image: Inch_4_Screened,
        title: "4 Inch Screened Gravel",
    },
];

const soil = [
    {
        id: "screened-loam",
        root: "soil",
        image: ScreenedLoam,
        title: "Screened Loam",
    },
    {
        id: "screened-top-soil",
        root: "soil",
        image: ScreenedTopSoil,
        title: "Screened Top Soil"
    }
]

const concrete = [
    {
        id: "redi-mix-concrete",
        root: "concrete",
        image: RediMix,
        title: "Redi-Mix Concrete",
    },
    {
        id: "pre-cast-concrete",
        root: "concrete",
        image: PreCast,
        title: "Pre-Cast Concrete",
    }
]

const showAllServices = [].concat(
    landscaping,
    construction,
    stones,
    gravel,
    soil,
    concrete
);

export default {
    landscaping,
    construction,
    stones,
    gravel,
    soil,
    concrete,
    All_Products: {
        showAllServices, // Include the "Show All" option
    },
}