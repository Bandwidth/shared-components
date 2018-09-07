import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Selectable from 'behaviors/Selectable';
import DragBox from 'components/DragBox';
import ToggleButton from 'components/ToggleButton';
import Grid from 'layouts/Grid';

storiesOf('DragBox', module)
  .add('standard', () => (
    <Selectable
      render={({ toggleItem, selected }) => (
        <DragBox
          onMouseUp={collisions => collisions.forEach(toggleItem)}
          renderContents={({ collisions, ref }) => (
            <Grid columns={4}>
              {Array.from(Array(4).keys())
                .map(i => `item-${i}`)
                .map(text => (
                  <ToggleButton.Colorful
                    innerRef={ref}
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
  ))
  .add('performance', () => (
    <Selectable
      render={({ toggleItem, selected }) => (
        <DragBox
          onMouseUp={collisions => {
            collisions.forEach(toggleItem);
          }}
          renderContents={({ collisions, ref }) => (
            <Grid columns={10}>
              {Array.from(Array(100).keys())
                .map(i => `item-${i}`)
                .map(text => (
                  <ToggleButton.Colorful
                    innerRef={ref}
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
  ))
  .add('scroll area', () => (
    <div id="scrollContext" style={{ overflowY: 'scroll', height: '100px' }}>
      <Selectable
        render={({ toggleItem, selected }) => (
          <DragBox
            scrollSelector="#scrollContext"
            onMouseUp={collisions => collisions.forEach(toggleItem)}
            renderContents={({ collisions, ref }) => (
              <Grid columns={10}>
                {Array.from(Array(100).keys())
                  .map(i => `item-${i}`)
                  .map(text => (
                    <ToggleButton.Colorful
                      innerRef={ref}
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
