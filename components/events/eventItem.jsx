import classes from './event-item.module.css';
import Button from '../UI/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon'
import Image from 'next/image';

export default function EventItem(props) {

    const { title, date, location, image, id } = props;

    const humanDate = new Date(date).toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const humanAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <Image src={'/' + image} alt={title} width={250} height={160}  />
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{humanAddress}</address>
                    </div>
                </div>

                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span><ArrowRightIcon className={classes.icon} /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}