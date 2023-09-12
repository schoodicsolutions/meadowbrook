import Link from "next/link";

export default function SliceHero() {
    { /* TO-DO - pass these in as a property */ }
    const hierarchy = ['Home', 'Landscaping Services', 'Stump Grinding'];

    return (
        <>
            <section className="bg-midnight text-white pl-[167px] mt-0 relative h-[407px]">
                <nav className="pt-7">
                    { hierarchy.map((item, index) => (
                        <>
                            { /* TO-DO - add actual link paths */ }
                            <Link href="#" className={index < hierarchy.length - 1 ? 'font-bold' : 'font-medium'}>
                                {item}
                            </Link>
                            {index < hierarchy.length - 1 && (
                                <span>&nbsp;/&nbsp;</span>
                            )}
                        </>
                    )) }
                </nav>
                { /* TO-DO - add heading and caption as props */}
                <h1 className="mt-12 text-[56px] mb-2">
                    Stump Grinding Services:<br />
                    Unearth the Beauty Beneath
                </h1>
                <p>A Service From Meadowbrook</p>
                <div className="absolute right-0 top-0 h-[407px]">
                    <svg className="absolute h-full top-0 left-0 -ml-6 fill-scarlet">
                        <path d="M185.261 0H1018V407H0L185.261 0Z" />
                    </svg>
                    { /* TO-DO - add image path as component prop */}
                    <img src="/img/east_grand_lake_autumn_sm.webp" className="w-[995px] h-[407px]" style={{
                        clipPath: 'path("M159.668 0H995V407H0L159.668 0Z")'
                    }} />
                </div>
            </section>
        </>
    );
}