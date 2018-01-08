# Contributing

1. If you make changes to an existing component's contract, please outline these clearly in the PR description. Avoid backwards-incompatible changes to props or behavior where possible.
2. Separate styling and behavioral concerns into different components. Styling components which form sub-components of exposed components should be placed in a `/styles` folder adjacent to the component that uses them. See the examples present throughout the existing library components.
3. Avoid [Not Invented Here](https://en.wikipedia.org/wiki/Not_invented_here) syndrome: before writing custom UX behavior, look for an established React library with a compatible license to achieve your goals. We all like implementing interesting UI behavior in code, but it's more effective for us to reuse widely supported and full-featured community libraries.
4. Write unit tests for components with complex behavior or internal logic. There's no strict litmus for this, use good judgment.
5. Add documentation to publically exposed components in the form of a markdown file adjacent to the component file.
