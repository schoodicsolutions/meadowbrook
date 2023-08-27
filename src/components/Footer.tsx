import Logo from "./Logo";
import SchoodicLogo from "./SchoodicLogo";

export default function Footer() {
    return (
        <footer className="bg-onyx text-white ">
            <div className="inner py-16 flex flex-col lg:flex-row justify-between w-full">
                <div className="flex flex-col gap-6">
                    <Logo className="text-white small sm:medium xl:large" />
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
                <p className="font-headings w-fit m-auto flex items-center">
                    Copyright &copy; 2023 Meadowbrook Materials LLC. | 
                    Designed by 
                    <a href="https://www.schoodic.io/">
                        <SchoodicLogo className="inline-block h-5 ml-2"/>
                    </a>
                </p>
            </div>
        </footer>
    )
}