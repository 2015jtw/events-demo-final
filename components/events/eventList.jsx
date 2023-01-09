import EventItem from "./eventItem";

export default function EventList(props) {
    const { items } = props;

    const { title, date, location, image, id } = props;


    return (
        <ul>
            {items.map((item) => (
                <EventItem key={item.id} id={item.id} title={item.title} location={item.location} image={item.image} />
            ))}
        </ul>
    )
}