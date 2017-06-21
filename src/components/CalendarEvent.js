import React, {Component} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const getUrls = content => ( content.match(/^https?:\/\/\S+/g) );

class CalendarEvent extends Component {
    constructor(props){
        super(props);
    }

    getPicture = description => {
        return (description && getUrls(description)) ? 
            getUrls(description)[0] :
            null;
    };

    getExcerpt = (description, count) => (
        (description && this.removePicture(description)) ?
        this.removePicture(description).substr(0,count) :
        null);

    removePicture = (description) => (
        ((description) && this.getPicture(description)) ? 
        description.substr(this.getPicture(description).length+1 ) :
        null 
    );

    render() {
        const { item } = this.props;
        return (
            <Card>
                {this.getPicture(item.description) ?
                <Image src={this.getPicture(item.description)} />
                : null
                }
                <Card.Content>
                    <Card.Header>
                        {item.summary}
                    </Card.Header>
                    <Card.Meta>
                        <Icon name="calendar"/> <time>{item.start.date || item.start.dateTime}</time>
                    </Card.Meta>
                    <Card.Description>
                        {this.getExcerpt(item.description, 100)}
                    </Card.Description>
                </Card.Content>
                {(item.location) ?
                    <Card.Content extra>
                        <Icon name="pin" />
                        {item.location}
                    </Card.Content> 
                    : null
                }
            </Card>
        )
    }
}

export default CalendarEvent;