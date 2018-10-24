import Table from './Table';
export { default as Header } from './TableHeader';
export { default as Row } from './styles/TableRow';
export { default as Cell } from './styles/TableCell';
import SimpleTable from './SimpleTable';

Table.Simple = SimpleTable;

export { SimpleTable };
export default Table;
