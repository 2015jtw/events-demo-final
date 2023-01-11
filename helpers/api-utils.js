

export async function getAllEvents() {
    const res = await fetch('https://nextjs-b2dff-default-rtdb.firebaseio.com/sales/events.json');
    const data = await res.json();

    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        })
    }
    return events;
}


export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}