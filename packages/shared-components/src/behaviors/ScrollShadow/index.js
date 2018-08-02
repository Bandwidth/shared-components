import { Provider as LocalProvider } from './ScrollContext';
import { Provider as GlobalProvider } from './GlobalScrollContext';
import ScrollShadow from './ScrollShadow';

export const Observer = LocalProvider;
export const GlobalObserver = GlobalProvider;

ScrollShadow.Observer = LocalProvider;
ScrollShadow.GlobalObserver = GlobalProvider;

export default ScrollShadow;
