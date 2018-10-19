import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Fields, { Field } from 'layouts/Fields';
import Input from 'components/Input';

storiesOf('Fields', module)
  .add('standard', () => (
    <Fields>
      <Field label="label">
        <Input placeholder="Content" />
      </Field>
      <Field helpText="help">
        <Input placeholder="Content" />
      </Field>
      <Field label="label" helpText="help">
        <Input placeholder="Content" />
      </Field>
      <Field required label="Required:" helpText="A required field">
        <Input placeholder="Content" />
      </Field>
      <Field disabled label="Disabled" helpText="A disabled field">
        <Input disabled placeholder="Content" />
      </Field>
      <Field columnSpan={2} label="Wide" helpText="A wide field">
        <Input placeholder="Content" />
      </Field>
    </Fields>
  ))
  .add('skeleton', () => (
    <Fields.Skeleton>
      <Field.Skeleton label="label">
        <Input.Skeleton placeholder="Content" />
      </Field.Skeleton>
      <Field.Skeleton helpText="help">
        <Input.Skeleton placeholder="Content" />
      </Field.Skeleton>
      <Field.Skeleton label="label" helpText="help">
        <Input.Skeleton placeholder="Content" />
      </Field.Skeleton>
      <Field.Skeleton required label="Required:" helpText="A required field">
        <Input.Skeleton placeholder="Content" />
      </Field.Skeleton>
      <Field.Skeleton disabled label="Disabled" helpText="A disabled field">
        <Input.Skeleton disabled placeholder="Content" />
      </Field.Skeleton>
      <Field.Skeleton columnSpan={2} label="Wide" helpText="A wide field">
        <Input.Skeleton placeholder="Content" />
      </Field.Skeleton>
    </Fields.Skeleton>
  ));
