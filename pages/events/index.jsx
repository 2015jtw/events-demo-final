import { getAllEvents } from "../../data/dummy-data";
import EventList from '../../components/events/eventList';
import EventSearch from "../../components/events/event-search";
import { Fragment } from "react";
import { useRouter } from 'next/router'

export default function EventsPage() {

    const allEvents = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullpath = `/events/${year}/${month}`
        router.push(fullpath);
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventsHandler} />
            <EventList items={allEvents} />
        </Fragment>
    )
}