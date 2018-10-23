import React from 'react';
import { SidebarList } from '@bandwidth/shared-components';

export default ({ count = 20, activeIndex = 5 }) => (
  <SidebarList>
    {new Array(count)
      .fill(null)
      .map((_, idx) => (
        <SidebarList.Item
          key={idx}
          label={`Item ${idx}`}
          details={`Details ${idx}`}
          active={idx === activeIndex}
        />
      ))}
  </SidebarList>
);
