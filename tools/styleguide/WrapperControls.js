import React from 'react';

import styled from 'styled-components';
import get from '../../src/extensions/themeGet';
import { Toggle, RadioGroup, Flow, Accordion } from '../../src';
import {
  AccordionBorder,
  AccordionLabel,
  AccordionContent,
  AccordionArrow,
} from '../../src/components/Accordion';

const Container = styled.div`
  margin: -17px;
  margin-bottom: 0;
`;

const ControlsArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ControlsAccordionBorder = AccordionBorder.extend`
  background: ${get('colors.background.default')};
  color: ${get('colors.gray.medium')};
  border-color: ${get('colors.border.light')};
`;

const ControlsAccordionLabel = AccordionLabel.Small.extend`
  padding: ${get('spacing.extraSmall')};
  color: ${get('colors.text.default')};
  font-size: 12px;
`;

const ControlsAccordionContent = AccordionContent.Small.extend`
  padding: ${get('spacing.extraSmall')};
  color: inherit;
`;

const ControlsAccordionArrow = AccordionArrow.Small.extend`
  color: inherit;
`;

export default class WrapperControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  render() {
    const { theme, xray, setTheme, setXRay } = this.props;
    const { expanded } = this.state;

    return (
      <Container>
        <Accordion
          label={
            expanded
              ? 'Controls'
              : `Theme: ${theme}, X-Ray ${xray ? 'on' : 'off'}`
          }
          onToggle={isCollapsed => this.setState({ expanded: !isCollapsed })}
          isExpanded={expanded}
          Border={ControlsAccordionBorder}
          Label={ControlsAccordionLabel}
          Content={ControlsAccordionContent}
          Arrow={ControlsAccordionArrow}
        >
          <ControlsArea>
            <Flow>
              <Flow.Row>
                <Flow.Item label="Theme">
                  <RadioGroup
                    value={theme}
                    options={['iris', 'catapult']}
                    onChange={setTheme}
                  />
                </Flow.Item>
                <Flow.Item>
                  <Toggle
                    onChange={ev => {
                      setXRay(ev.target.checked);
                    }}
                    value={xray}
                    description="X-Ray"
                  />
                </Flow.Item>
              </Flow.Row>
            </Flow>
          </ControlsArea>
        </Accordion>
      </Container>
    );
  }
}
