import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from 'components/Accordion';

storiesOf('Accordion', module)
  .add('types', () => (
    <div>
      <Accordion label="Accordion">Contents</Accordion>
      <Accordion.Small label="Small">Contents</Accordion.Small>
      <Accordion startExpanded label="Start expanded">
        Contents
      </Accordion>
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Accordion disabled label="Disabled">
        Contents
      </Accordion>
      <Accordion disabled startExpanded label="Disabled">
        Contents
      </Accordion>
      <Accordion.Small disabled label="Small disabled">
        Contents
      </Accordion.Small>
    </div>
  ));
