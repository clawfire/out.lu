import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import EventList from './components/EventList';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      eventList : null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/c5hjb2jkko0ksagbip0m2sl9ho@group.calendar.google.com/events?key=AIzaSyCT92FlCBpFHB85LSvtjzUBtRYvkKMSMpk');
      const eventList = await response.json();
      this.setState(() => ({eventList}));
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const {eventList} = this.state;
    return (
      <div className="ui container">
        <main>
          { eventList !== null ? 
          <EventList list={eventList} />
          : "Nothing to display sorry :("
          }
        </main>
      </div>
    );
  }
}

export default App;
