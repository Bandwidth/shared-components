import React from 'react';
import { SplitContentLayout } from '@bandwidth/shared-components';

export default ({ count = 20, activeIndex = 5 }) => (
  <SplitContentLayout.SecondaryContent.SidebarList>
    {new Array(count).fill(null).map((_, idx) => (
      <SplitContentLayout.SecondaryContent.SidebarList.Item
        key={idx}
        active={idx === activeIndex}
      >
        <SplitContentLayout.SecondaryContent.SidebarList.Item.Label>
          Item {idx}
        </SplitContentLayout.SecondaryContent.SidebarList.Item.Label>
        <SplitContentLayout.SecondaryContent.SidebarList.Item.Details>
          Details {idx}
        </SplitContentLayout.SecondaryContent.SidebarList.Item.Details>
      </SplitContentLayout.SecondaryContent.SidebarList.Item>
    ))}
  </SplitContentLayout.SecondaryContent.SidebarList>
);
