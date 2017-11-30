## PR Checklist

Check these before submitting your pull request:

- [ ] Visual and behavioral components are separated
- [ ] Exported components are documented with examples
- [ ] PropTypes have JSDoc comments
- [ ] All relevant visual sub-components can be overridden via props

## Breaking Changes

* Describe all breaking changes here

## Changes to Existing Components

* Describe meaningful changes to existing components here

## New Visual Components

* List and describe any new visual components (styled-component primitives) here. Visual components which are sub-components of exported components must be contained in a `/styles` directory adjacent to their super-component

## New Behavioral Components

* List and describe behavioral components here. Behavioral components must have no associated styling. If styling is necessary, refactor styled elements into visual components and ensure they can be overridden via props.
