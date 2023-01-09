import Link from 'next/link'

export default function EventItem(props) {

    const { title, date, location, image, id } = props;

    const humanDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const humanAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;

    return (
        <li>
            <img src={'/' + image} alt={title} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanDate}</time>
                    </div>
                    <div>
                        <address>{humanAddress}</address>
                    </div>
                </div>

                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}