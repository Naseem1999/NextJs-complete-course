import EventItem from "./event-Item"
import classes from './event-list.module.css';

function EventList(props){
    const {items}=props;
    return <ul className={classes.list}>
    {items.map((event)=>(<EventItem 
    id={event.id}
    title={event.title}
    location={event.location}
    date={event.date}
    image={event.image}
    key={event.title}
    />))}
    </ul>
}

export default EventList;