import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/eventList'
import ResultsTitle from '../../components/events/results-title';
import { Fragment, useEffect, useState } from 'react';
import Button from '../../components/UI/button';
import ErrorAlert from '../../components/UI/error-alert';
import useSWR from 'swr';

export default function FilteredEventPage(props) {

    const router = useRouter();
    const filteredData = router.query.slug;

    const url = "https://nextjs-b2dff-default-rtdb.firebaseio.com/sales/events.json";
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(url, fetcher);
    const [loadedEvents, setLoadedEvents] = useState();

    useEffect(() => {
        if (data) {
            const events = [];

            for (const key in data) {
                events.push({
                    id: key,
                    ...data[key]
                })
            }

            setLoadedEvents(events);
        }

    }, [data])

    if (!loadedEvents) {
        return (
            <p className='center'>Loading...</p>
        )
    }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 || error) {

        return (
            <Fragment>
                <ErrorAlert><p>Invalid Filter. Please adjust your values.</p></ErrorAlert>

                <div className="center">
                    <Button link="/events">Show all Events</Button>
                </div>
            </Fragment>
        )
    }

    const filteredEvents = loadedEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
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


// export async function getServerSideProps(context) {

//     const { params } = context;
//     const filteredData = params.slug;

//     const filteredYear = filteredData[0];
//     const filteredMonth = filteredData[1];

//     const numYear = +filteredYear;
//     const numMonth = +filteredMonth;

//     if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
//         return {
//             props: { hasError: true }
//         }
//     }

//     const filteredEvents = await getFilteredEvents({
//         year: numYear,
//         month: numMonth
//     });

//     return {
//         props: {
//             filteredEvents: filteredEvents,
//             date: {
//                 year: numYear,
//                 month: numMonth
//             }
//         }
//     }
// }