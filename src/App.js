import React from 'react';
import OuterFloorMap from './OuterFloorMap'
import FirstFloor from './FirstFloor'
import { Columns } from 'react-bulma-components'

function App() {
  return (
    <div style={{ maxHeight: "300px", maxWidth: '400px' }}>
      <OuterFloorMap>
        <FirstFloor />
      </OuterFloorMap>

      <Columns>
        <Columns.Column>
          <OuterFloorMap>
            <FirstFloor />
          </OuterFloorMap>
        </Columns.Column>
      </Columns>
    </div>
  );
}

export default App;
