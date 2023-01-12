import { getAllEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/eventList';
import EventSearch from "../../components/events/event-search";
import { Fragment } from "react";
import { useRouter } from 'next/router'

export default function EventsPage(props) {

    const allEvents = props.allEvents;
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

export async function getStaticProps() {

    const allEvents = await getAllEvents();

    return {
        props: {
            allEvents: allEvents
        },
        revalidate: 60
    }
}