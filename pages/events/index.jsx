import { getAllEvents } from "../../data/dummy-data";
import EventList from '../../components/events/eventList';

export default function EventsPage() {

    const allEvents = getAllEvents();

    return (
        <div>
            <EventList items={allEvents} />
        </div>
    )
}