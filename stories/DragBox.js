import React from 'react';
import { storiesOf } from '@storybook/react';
import Selectable from 'behaviors/Selectable';
import DragBox from 'components/DragBox';
import ToggleButton from 'components/ToggleButton';
import Grid from 'layouts/Grid';
import _ from 'lodash';

const Wrapper = (props) => {
  const [selected, setSelected] = React.useState(new Set());
  const childSetSelected = React.useCallback((collisions) => {
    const finalResult = new Set(_.xor(Array.from(collisions), Array.from(selected)));
    setSelected(finalResult);
  })
  return props.children({ selected, setSelected: childSetSelected });
}

const Contents = React.memo(React.forwardRef(({ selected, collisions, count, onClick }, ref) => (
  console.warn('render contents', selected, collisions, count) || <Grid columns={10}>
    {Array.from(Array(count).keys())
      .map(i => `item-${i}`)
      .map(text => (
        <ToggleButton.Colorful
          forwardRef={ref}
          data-drag-box-key={text}
          key={text}
          name={text}
          onClick={onClick}
          selected={
            selected.has(text) || collisions.has(text)
          }
          hovered={
            selected.has(text) && collisions.has(text)
          }
        >
          {text}
        </ToggleButton.Colorful>
      ))}
  </Grid>
)));

storiesOf('DragBox', module)
  .add('standard', () => (
    <Wrapper>
      {({ selected, setSelected, }) => (
        <DragBox
          onMouseUp={setSelected}
          renderContents={(props) => <Contents selected={selected} count={20} {...props} />}
        />
      )}
    </Wrapper>
  ))
  .add('performance (1000)', () => (
    <Wrapper>
      {({ selected, setSelected, }) => (
        <DragBox
          onMouseUp={setSelected}
          renderContents={(props) => <Contents selected={selected} count={1000} {...props} />}
        />
      )}
    </Wrapper>
  ))
  .add('performance (5000)', () => (
    <Wrapper>
      {({ selected, setSelected, }) => (
        <DragBox
          onMouseUp={setSelected}
          renderContents={(props) => <Contents selected={selected} count={5000} onClick={null} {...props} />}
        />
      )}
    </Wrapper>
  ))
  .add('scroll area', () => (
    <div id="scrollContext" style={{ overflowY: 'scroll', height: '100px' }}>
      <Wrapper>
        {({ selected, setSelected, }) => (
          <DragBox
            scrollSelector="#scrollContext"
            onMouseUp={setSelected}
            renderContents={(props) => <Contents selected={selected} count={100} {...props} />}
          />
        )}
      </Wrapper>
    </div>
  ))
  .add('non-data-attr based', () => (
    <Selectable
      render={({ toggleItem, selected }) => (
        <DragBox
          onMouseUp={collisions => collisions.forEach(toggleItem)}
          renderContents={({ collisions, getRef }) => (
            <Grid columns={4}>
              {Array.from(Array(4).keys())
                .map(i => `item-${i}`)
                .map(text => (
                  <ToggleButton.Colorful
                    innerRef={getRef(text)}
                    data-drag-box-key={text}
                    key={text}
                    name={text}
                    onClick={toggleItem}
                    selected={
                      collisions.size > 0
                        ? selected.has(text) || collisions.has(text)
                        : selected.has(text)
                    }
                    hovered={
                      collisions.size > 0
                        ? selected.has(text) && collisions.has(text)
                        : null
                    }
                  >
                    {text}
                  </ToggleButton.Colorful>
                ))}
            </Grid>
          )}
        />
      )}
    />
  ));
