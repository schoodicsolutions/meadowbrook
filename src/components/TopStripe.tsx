export default function TopStripe() {
    return (
        <div className="flex w-full lg:absolute lg:top-0 lg:right-0 lg:w-fit">
            <div className="border-transparent border-b-scarlet border-r-scarlet lg:border-[21px] w-0 h-0" />
            <div className="bg-scarlet h-[42px] px-[44px] flex gap-12 text-white font-bold items-center grow">
                <p>888 Main Street, East Machias, ME 04630</p>
                <p>(207) 259-6068</p>
            </div>
        </div>
    )
}