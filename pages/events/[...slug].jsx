import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../data/dummy-data';
import EventList from '../../components/events/eventList'
import ResultsTitle from '../../components/events/results-title';
import { Fragment } from 'react';
import Button from '../../components/UI/button';
import ErrorAlert from '../../components/UI/error-alert';

export default function FilteredEventPage() {

    const router = useRouter();
    const filteredData = router.query.slug;


    if (!filteredData) {
        return (
            <ErrorAlert><p className='center'>Loading...</p></ErrorAlert>

        )
    }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return (
            <Fragment>
                <ErrorAlert><p>Invalid Filter. Please adjust your values.</p></ErrorAlert>

                <div className="center">
                    <Button link="/events">Show all Events</Button>
                </div>
            </Fragment>

        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert><p>No events found for chosen filters.</p></ErrorAlert>

                <div className="center">
                    <Button link="/events">Show all Events</Button>
                </div>

            </Fragment>
        )
    }

    const date = new Date(numYear, numMonth - 1);

    return (

        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    )
}