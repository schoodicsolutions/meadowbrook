import { useBreakpoint } from "~/hooks/useBreakpoint";

export default function FlexText() {
    const isLg = useBreakpoint('xs');
    return (<>
        <h1 className="font-bold">
        Your Trusted Redi-Mix { isLg ? null : <br /> } Concrete { isLg ? <br /> : null }
        And { isLg ? null : <br /> } Aggregate Supplier
        </h1>
        <h2 className="font-body font-normal">
        <em className="font-bold">Excellence for Generations.</em>&nbsp;
        Building { isLg ? null : <br /> } Washington County With { isLg ? <br /> : null }
        Superior { isLg ? null : <br /> } Concrete And Unparalleled Service
        </h2>
    </>);
}