import EventItem from "./eventItem";
import classes from './event-list.module.css'

export default function EventList(props) {
    const { items } = props;

    const { title, date, location, image, id } = props;


    return (
        <ul className={classes.list}>
            {items.map((item) => (
                <EventItem key={item.id} id={item.id} title={item.title} date={item.date} location={item.location} image={item.image} />
            ))}
        </ul>
    )
}