import React from 'react';
import { Field, Input, Toggle } from '@bandwidth/shared-components';

export default ({ children, columns = 2 }) => (
  <form>
    <Field.Group columns={columns}>
      <Field label="Input 1" required>
        <Input value="Value 1" required />
      </Field>
      <Field label="Input 2" helpText="Optional">
        <Input value="Value 2" />
      </Field>
      <Field label="Toggle 1">
        <Toggle checked description="It's a toggle" />
      </Field>
      <Field label="Input 3" helpText="Secret">
        <Input type="password" value="Shhhh" />
      </Field>
    </Field.Group>
    {children}
  </form>
);
