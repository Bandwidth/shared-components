export { default as Form } from './Form';
export { default as SidebarList } from './SidebarList';
export {
  default as ActionBarExpandingContent,
} from './ActionBarExpandingContent';
} from '../widgets';
import Left from './Left';
import LeftComplex from './LeftComplex';
import Right from './Right';
import RightComplex from './RightComplex';
import Docs from './Docs';

export default () => (
  <Switch>
    <Route exact path="/splitContent" component={Docs} />
    <Route exact path="/splitContent/right" component={Right} />
    <Route exact path="/splitContent/rightComplex" component={RightComplex} />
    <Route exact path="/splitContent/left" component={Left} />
    <Route exact path="/splitContent/leftComplex" component={LeftComplex} />
  </Switch>
);
dx}>{code}</Example>)}
  </React.Fragment>
);
