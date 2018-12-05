import React, { forwardRef } from 'react';
import DefaultOptionsListContainer from './OptionsListContainer';
import DefaultOptionsList from './OptionsList';
import DefaultOption from './Option';
import HelpText from 'components/HelpText';

/**
 * A component to render the options of a Select. It will receive a variety of
 * props which you may use to construct your rendering behavior. This component MUST
 * forward its ref to a valid HTML element!
 */
const Options = forwardRef(
  (
    {
      placement,
      getMenuProps,
      getItemProps,
      renderOption,
      highlightedIndex,
      style,
      options,
      OptionsListContainer,
      OptionsList,
      Option,
    },
    ref,
  ) => {
    if (!options.length) {
      return (
        <OptionsListContainer
          data-placement={placement}
          {...getMenuProps({ ref, style })}
        >
          <OptionsList>
            <Option>
              <HelpText style={{ margin: 0 }}>No items</HelpText>
            </Option>
          </OptionsList>
        </OptionsListContainer>
      );
    }

    return (
      <OptionsListContainer
        data-placement={placement}
        {...getMenuProps({
          ref,
          style,
        })}
      >
        <OptionsList>
          {options.map((option, index) => (
            <Option
              {...getItemProps({
                key: renderOption(option),
                index,
                item: option,
                highlighted: highlightedIndex === index,
              })}
            >
              {renderOption(option)}
            </Option>
          ))}
        </OptionsList>
      </OptionsListContainer>
    );
  },
);

Options.defaultProps = {
  OptionsListContainer: DefaultOptionsListContainer,
  OptionsList: DefaultOptionsList,
  Option: DefaultOption,
};

Options.styles = {
  OptionsListContainer: DefaultOptionsListContainer,
  OptionsList: DefaultOptionsList,
  Option: DefaultOption,
};

export default Options;
