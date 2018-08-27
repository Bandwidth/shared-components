import React from 'react';
import { SplitContentLayout } from '../../../../src';
import { Form, SidebarList, ActionBarExpandingContent } from '../widgets';
import { H2, Button, Anchor } from '@bandwidth/shared-components';

export default class RightComplexDemo extends React.Component {
  state = {
    showModal: false,
  };

  showModal = () => this.setState({ showModal: true });
  hideModal = () => this.setState({ showModal: false });

  render() {
    const { showModal } = this.state;

    return (
      <SplitContentLayout gutter>
        <SplitContentLayout.SecondaryContent overlapBorder>
          <H2 spacing={{ horizontal: 'lg', vertical: 'lg' }}>List</H2>
          <SidebarList />
        </SplitContentLayout.SecondaryContent>
        <SplitContentLayout.MainContent>
          <H2>Content</H2>
          <SplitContentLayout.MainContent.Box>
            <Form />
          </SplitContentLayout.MainContent.Box>
          <SplitContentLayout.MainContent.Box>
            <Form />
          </SplitContentLayout.MainContent.Box>
          <SplitContentLayout.MainContent.Box>
            <Form />
          </SplitContentLayout.MainContent.Box>
          <SplitContentLayout.MainContent.Box>
            <Form />
          </SplitContentLayout.MainContent.Box>
          <SplitContentLayout.MainContent.Box>
            <Form />
          </SplitContentLayout.MainContent.Box>
          <SplitContentLayout.MainContent.Box>
            <Form>
              <SplitContentLayout.ActionBar
                renderExpandingContent={params => (
                  <ActionBarExpandingContent {...params}>
                    <Form />
                    <br />
                    <Form />
                    <br />
                    <Form />
                    <br />
                    <Form />
                  </ActionBarExpandingContent>
                )}
              >
                {({ toggleExpanded }) => (
                  <React.Fragment>
                    <Anchor onClick={toggleExpanded}>Toggle expanded</Anchor>
                    <Anchor onClick={this.showModal}>Show modal</Anchor>
                    <Button>Submit</Button>
                  </React.Fragment>
                )}
              </SplitContentLayout.ActionBar>
            </Form>
          </SplitContentLayout.MainContent.Box>
          {showModal && (
            <SplitContentLayout.Modal onClose={this.hideModal}>
              <Form />
            </SplitContentLayout.Modal>
          )}
        </SplitContentLayout.MainContent>
      </SplitContentLayout>
    );
  }
}
