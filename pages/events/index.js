import EventList from "@/components/evvents/event-list";
import EventsSearch from "@/components/evvents/events-search";
import { getAllEvents } from "@/dummy-data";
import {Fragment}  from 'react'
import { useRouter } from "next/router";
function AllEventsPage(){
    const events=getAllEvents();
    const router=useRouter();''
    function findEventsHandler(year,month){
   const fullPath=`/events/${year}/${month}`
    router.push(fullPath)
    }
    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
        <EventList items={events}/>
        </Fragment>
    )
}

export default AllEventsPage;