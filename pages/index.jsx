import EventList from "../components/events/eventList";
import { getFeaturedEvents } from "../helpers/api-utils";
import Head from "next/head";

export default function FeaturedEventsPage(props) {

  return (
    <div>

      <Head>
        <title>NextJS Events</title>
        <meta name="Featured Events" description="a place to find featured events" />
      </Head>
      <EventList items={props.featuredEvents} />
    </div>
  )
}

export async function getStaticProps(context) {

  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents
    },
    revalidate: 1800
  }
}
