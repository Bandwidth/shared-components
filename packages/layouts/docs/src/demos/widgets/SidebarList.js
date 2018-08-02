import React from 'react';
import { SplitContentLayout } from '../../../../src';

export default ({ count = 20, activeIndex = 5 }) => (
  <SplitContentLayout.SecondaryContent.SidebarList>
    {new Array(count)
      .fill(null)
      .map((_, idx) => (
        <SplitContentLayout.SecondaryContent.SidebarList.Item
          key={idx}
          label={`Item ${idx}`}
          details={`Details ${idx}`}
          active={idx === activeIndex}
        />
      ))}
  </SplitContentLayout.SecondaryContent.SidebarList>
);
