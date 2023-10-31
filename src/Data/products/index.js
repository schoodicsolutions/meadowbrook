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

} from '../../assets'


const landScapingServices = [
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

const constructionServices = [
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

export {
    landScapingServices, constructionServices
}