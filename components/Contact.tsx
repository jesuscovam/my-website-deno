interface ILink {
    url: string
    label: string
}

const links: ILink[] = [
    {
        url: 'https://www.twitter.com/jesusacova',
        label: 'twitter',
    },
    {
        url: 'https://www.github.com/jesuscovam',
        label: 'github',
    },
]

function Link({ url, label }: ILink) {
    return (
        <a
            className="text-indigo-400 underline"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {label}
        </a>
    )
}

export function Contact() {
    return (
        <div className="flex flex-col space-y-5">
            <div>
                <img
                    className="rounded-2xl"
                    src="/jesus.jpg"
                    width="200"
                    height="200"
                />
            </div>
            <div className="flex flex-col space-y-1 text-left">
                <h1>jesus cova</h1>
                {links?.map((link) => (
                    <Link key={link?.url} {...link} />
                ))}
            </div>
        </div>
    )
}
