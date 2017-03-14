// import { padded } from 'pristine-app';

// forms
import Button from './components/Button';
import FieldGroup from './components/FieldGroup';
import Label from './components/Label';
import Form from './components/Form';
import FormBox from './components/FormBox';
import TextInput from './components/TextInput';
import Toggle from './components/Toggle';
import RadioGroup from './components/RadioGroup';
import Select from './components/Select';

// layout
import Accordion from './components/Accordion';
import AccordionGroup from './components/AccordionGroup';
import Card from './components/Card';
import FluidGridList from './components/FluidGridList';
import ScrollBox from './components/ScrollBox';
import SidebarLayout from './components/SidebarLayout';
import List from './components/List';
import ListItem from './components/ListItem';

// navigation
import TabGroup from './components/TabGroup';
import Link from './components/Link';
import TopNav from './components/TopNav';

// misc
import Code from './components/Code';
import ErrorScreen from './components/ErrorScreen';

// themes
import defaultTheme from './themes/default';
import smallTheme from './themes/small';
import secondaryTheme from './themes/secondary';
import errorTheme from './themes/error';

export const components = {
  forms: [
    Form,
    FormBox,
    Button,
    TextInput,
    RadioGroup,
    Select,
    Toggle,
    Label,
    FieldGroup,
  ],

  layout: [
    Accordion,
    AccordionGroup,
    Card,
    FluidGridList,
    ScrollBox,
    SidebarLayout,
    List,
    ListItem,
  ],

  navigation: [
    TabGroup,
    Link,
    TopNav,
  ],

  misc: [
    Code,
    ErrorScreen,
  ],
};

// add any styled-components themes you want to use here
export const themes = [
  defaultTheme,
  smallTheme,
  secondaryTheme,
  errorTheme,
];

// you can specify a custom header by exporting one. can be a string, or a React node
export const header = 'Bandwidth Shared Components';
