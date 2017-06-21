import React from 'react';
import CalendarEvent from './CalendarEvent';
import { Card } from 'semantic-ui-react';

const EventList = ({list}) => (
    <Card.Group>
    { list.items.map(item =>
        <CalendarEvent item={item} key={item.id} />
    )}
    </Card.Group>
)

export default EventList;