import React from "react"

interface Props {
    tag?: 'button' | 'a',
    href?: string,
    onClick?: Function,
    children: React.ReactNode,
}

export default function Button({ tag="button", href, children, onClick=() => {} }: Props ) {
    const Tag = tag
    return (
        <Tag
            {...(href ? { 'href': href, target: 'new' } : {})}
            onClick={() => onClick()}
            className="flex flex-row items-center justify-center gap-[5px] border border-rose text-sm text-rose rounded-[20px] px-[15px] py-[5px] font-semibold font-urbanist transition-colors duration-500 hover:border-camelia hover:bg-camelia hover:text-white"
        >
            {children}
        </Tag>
    )
}