import { getFeaturedEvents, getEventById } from '../../helpers/api-utils';
import { Fragment } from "react";
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from "../../components/UI/error-alert";


export default function EventId(props) {


    const event = props.selectedEvent;

    if (!event) {
        return (
            <div className='center'>
                <p>Loading...</p>
            </div>

        )
    }


    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
                <p>Changed some things</p>
            </EventContent>
        </Fragment>
    )
}

export async function getStaticProps(context) {

    const eventId = context.params.eventId;
    const event = await getEventById(eventId);


    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();

    const paths = events.map((event) => ({ params: { eventId: event.id } }))


    return {
        paths: paths,
        fallback: true
    }


}