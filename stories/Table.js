import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table from 'components/Table';

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
  .add('small', () => (
    <Table.Small
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
    </Table.Small>
  ))
  .add('loading', () => (
    <Table
      loading={true}
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
  ));
