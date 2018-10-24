import React from 'react';
import {
  SplitContentLayout,
  H2,
  Button,
  Anchor,
} from '@bandwidth/shared-components';
import { Form, SidebarList, ActionBarExpandingContent } from '../widgets';

export default class RightComplexDemo extends React.Component {
  state = {
    showPopup: false,
  };

  showPopup = () => this.setState({ showPopup: true });
  hidePopup = () => this.setState({ showPopup: false });

  render() {
    const { showPopup } = this.state;

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
                    <Anchor onClick={this.showPopup}>Show popup</Anchor>
                    <Button>Submit</Button>
                  </React.Fragment>
                )}
              </SplitContentLayout.ActionBar>
            </Form>
          </SplitContentLayout.MainContent.Box>
          <SplitContentLayout.Popup
            onClose={this.hidePopup}
            expanded={showPopup}
          >
            <Form />
          </SplitContentLayout.Popup>
        </SplitContentLayout.MainContent>
      </SplitContentLayout>
    );
  }
}
