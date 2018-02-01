import React from 'react';
import PropTypes from 'prop-types';
import DefaultLabel from '../../components/Label';
import DefaultHelpText from '../../components/HelpText';
import FieldContent from './styles/FieldContent';
import { get } from 'lodash';

class Field extends React.Component {
  static propTypes = {
    column: PropTypes.number,
    columnSpan: PropTypes.number,
    alignContent: PropTypes.oneOf(['stretch', 'left', 'right']),

    label: PropTypes.node,
    children: PropTypes.node,
    helpText: PropTypes.node,
    Label: PropTypes.func,
    HelpText: PropTypes.func,
    Content: PropTypes.func,
  };

  static defaultProps = {
    column: 0,
    columnSpan: 1,
    Label: DefaultLabel,
    HelpText: DefaultHelpText,
    Content: FieldContent,
  };

  render() {
    const {
      label,
      children,
      helpText,
      Label,
      HelpText,
      Content,
      column,
      columnSpan,
      alignContent,
    } = this.props;

    const endColumn = column + columnSpan - 1;
    const stylesFor = gridName => ({
      gridArea: `${gridName}${column} / ${gridName}${column} / ${gridName}${endColumn} / ${gridName}${endColumn}`,
      // align-self determines how the parts vertically align if an adjacent part is taller.
      // labels should stick to the bottom if an adjacent label has two or more lines.
      // content and helpText should stick to the top if an adjacent element is taller than them.
      alignSelf: gridName === 'label' ? 'end' : 'start',
    });

    const labelFor = get(children, 'props.id', null);

    return (
      <React.Fragment>
        {label && (
          <Label htmlFor={labelFor} style={stylesFor('label')}>
            {label}
          </Label>
        )}
        <Content style={stylesFor('content')} align={alignContent}>
          {children}
        </Content>
        {helpText && (
          <HelpText style={stylesFor('helpText')}>{helpText}</HelpText>
        )}
      </React.Fragment>
    );
  }
}

export default Field;
