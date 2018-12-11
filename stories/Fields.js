import React from 'react';
import { storiesOf } from '@storybook/react';
import Field from 'layouts/Field';
import Input from 'components/Input';
import Toggle from 'components/Toggle';

storiesOf('Field', module).add('standard', () => (
  <Field.Group>
    <Field label="label">
      <Input placeholder="Content" />
    </Field>
    <Field helpText="help">
      <Input placeholder="Content" />
    </Field>
    <Field label="label" helpText="help">
      <Input placeholder="Content" />
    </Field>
    <Field
      required
      label="Required:"
      helpText="A required field"
      helpCallout="Even more help"
      alignContentVertically="center"
    >
      <Toggle description="Required with help" />
    </Field>
    <Field disabled label="Disabled" helpText="A disabled field">
      <Input disabled placeholder="Content" />
    </Field>
    <Field columnSpan={2} label="Wide" helpText="A wide field">
      <Input placeholder="Content" />
    </Field>
  </Field.Group>
));
