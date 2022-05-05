import React, { Component } from 'react';
import Title from './Title';
import Missioncard from './MissionCard';
import spaceMissions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          spaceMissions.map((mission) => (
            <Missioncard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))
        }
      </div>
    );
  }
}

export default Missions;
