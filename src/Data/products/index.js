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
    BanRunGravel,
    Inch_2_Screened,
    Inch_4_Screened,
    ScreenedLoam,
    ScreenedTopSoil,

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
        id: "concrete-waste-blocks",
        root: "Stones",
        image: BrickBlock,
        title: "Concrete Waste Blocks",
    },
]

const gravel = [
    {
        id: "bank-run-gravel",
        root: "Gravel",
        image: BanRunGravel,
        title: "Bank Run Gravel",
    },
    {
        id: 'inch-2-screened-gravel',
        root: "Stones",
        image: Inch_2_Screened,
        title: "2 Inch Screened Gravel",
    },
    {
        id: 'inch-4-screened-gravel',
        root: "Stones",
        image: Inch_4_Screened,
        title: "4 Inch Screened Gravel",
    },
];

const soil = [
    {
        id: "screened-loam",
        root: "Soil",
        image: ScreenedLoam,
        title: "Screened Loam",
    },
    {
        id: "screened-top-soil",
        root: "Soil",
        image: ScreenedTopSoil,
        title: "Screened Top Soil"
    }
]

export default {
    landscaping,
    construction,
    stones,
    gravel,
    soil,
}