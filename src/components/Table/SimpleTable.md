Provides a more straighforward interface for creating a Table which may suit most use cases.

\`\`\`
<Table.Simple
  items={arrayOfItemData}
  columns={arrayOfColumnData}
  renderRow={functionToRenderARow}
  onSortChanged={functionToHandleSortChanges}
  renderDetails={functionToRenderDetailViewOfRow}
  loading={trueOrFalse}
/>
\`\`\`
