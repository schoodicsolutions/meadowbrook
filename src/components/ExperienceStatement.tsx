export interface IExperienceStatementProps {
    value: number;
    caption: string;
}

export default function ExperienceStatement({ value, caption }: IExperienceStatementProps) {
    return (
        <div className="text-center font-headings">
            <span className="text-scarlet font-bold text-[36px] block">{ Math.floor(value).toLocaleString() }+</span>
            <span className="text-white capitalize mt-5 block">{ caption }</span>
        </div>
    )
}