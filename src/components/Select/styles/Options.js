import React, { forwardRef } from 'react';
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
      OptionsList,
      Option,
    },
    ref,
  ) => {
    if (!options.length) {
      return (
        <OptionsList
          data-placement={placement}
          {...getMenuProps({ ref, style })}
        >
          <Option>
            <HelpText>No items</HelpText>
          </Option>
        </OptionsList>
      );
    }

    return (
      <OptionsList data-placement={placement} {...getMenuProps({ ref, style })}>
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
    );
  },
);

Options.defaultProps = {
  OptionsList: DefaultOptionsList,
  Option: DefaultOption,
};

Options.styles = {
  OptionsList: DefaultOptionsList,
  Option: DefaultOption,
};

export default Options;
