import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table from 'components/Table';
import BlobTable from 'skeletons/BlobTable';

storiesOf('Table', module)
  .add('standard', () => (
    <Table
      headers={
        <Table.Row>
          <Table.Header>One</Table.Header>
          <Table.Header>Two</Table.Header>
          <Table.Header sortable>Three</Table.Header>
        </Table.Row>
      }
    >
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>Foo</Table.Cell>
        <Table.Cell>Bar</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>Foo</Table.Cell>
        <Table.Cell>Bar</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Foo</Table.Cell>
        <Table.Cell>Bar</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>Foo</Table.Cell>
        <Table.Cell>Bar</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('skeleton', () => <BlobTable />)
  .add('small', () => (
    <Table.Small
      headers={
        <Table.Row>
          <Table.Header.Small>One</Table.Header.Small>
          <Table.Header.Small>Two</Table.Header.Small>
          <Table.Header.Small sortable>Three</Table.Header.Small>
        </Table.Row>
      }
    >
      <Table.Row>
        <Table.Cell.Small>1</Table.Cell.Small>
        <Table.Cell.Small>Foo</Table.Cell.Small>
        <Table.Cell.Small>Bar</Table.Cell.Small>
      </Table.Row>
      <Table.Row>
        <Table.Cell.Small>2</Table.Cell.Small>
        <Table.Cell.Small>Foo</Table.Cell.Small>
        <Table.Cell.Small>Bar</Table.Cell.Small>
      </Table.Row>
      <Table.Row>
        <Table.Cell.Small>3</Table.Cell.Small>
        <Table.Cell.Small>Foo</Table.Cell.Small>
        <Table.Cell.Small>Bar</Table.Cell.Small>
      </Table.Row>
      <Table.Row>
        <Table.Cell.Small>4</Table.Cell.Small>
        <Table.Cell.Small>Foo</Table.Cell.Small>
        <Table.Cell.Small>Bar</Table.Cell.Small>
      </Table.Row>
    </Table.Small>
  ))
  .add('small skeleton', () => <BlobTable.Small />);
