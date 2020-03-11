import React from 'react';
import OuterFloorMap from './OuterFloorMap'
import FirstFloor from './FirstFloor'
import Header from './Header'
import { Columns, Container, Heading, Section, } from 'react-bulma-components'

function App() {
  return (
    <>
      <main>
        <Header />
        hello
        <Section>
          <Container>
            <Columns className="is-centered is-vcentered">
              <Columns.Column className="has-text-centered">
                <Heading className="has-text-weight-normal" renderAs="h3"
                  size={3}>Hi, bill</Heading>

                <Heading className="has-text-weight-normal" renderAs="h5" size={5} subtitle>You
                                                are not able to pick a carrel at this time</Heading>
              </Columns.Column>
            </Columns>
          </Container>
        </Section>
        <Container style={{ maxHeight: "300px", maxWidth: '400px' }}>
          <Columns className="justify-center">
            <Columns.Column>
              <OuterFloorMap>
                <FirstFloor />
              </OuterFloorMap>
            </Columns.Column>
            <Columns.Column>

              lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.
              lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.
              lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.
              lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.v

          </Columns.Column>
          </Columns>
        </Container>
      </main>
    </>
  );
}

export default App;
