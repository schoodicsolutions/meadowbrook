import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-onyx text-white ">
            <div className="px-[275px] py-16 flex justify-between w-full">
                <div className="flex flex-col gap-6 ">
                    <Logo className="text-white large" />
                    <p>
                        We Work On All Make/Model Of Trucks.
                        Give Us A Call When You Need Us. You'll
                        Be Back On The Road In No Time.
                    </p>

                </div>
                <div className="flex flex-col gap-6 ">
                    <p>
                        We Work On All Make/Model Of Trucks.
                        Give Us A Call When You Need Us. You'll
                        Be Back On The Road In No Time.
                    </p>

                </div>
                <div className="flex flex-col gap-6 ">
                    <p>
                        We Work On All Make/Model Of Trucks.
                        Give Us A Call When You Need Us. You'll
                        Be Back On The Road In No Time.
                    </p>

                </div>
                <div className="flex flex-col gap-6 ">
                    <p>
                        We Work On All Make/Model Of Trucks.
                        Give Us A Call When You Need Us. You'll
                        Be Back On The Road In No Time.
                    </p>

                </div>
            </div>
            <div id="copyright-banner" className="bg-black py-2.5">
                <p className="font-headings w-fit m-auto">Copyright &copy; 2023 Meadowbrook Materials LLC. | Designed by Schoodic Solutions</p>
            </div>
        </footer>
    )
}