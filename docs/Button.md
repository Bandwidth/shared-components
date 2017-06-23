Button
====

      
The trusty button. Renders a `<button` tag with styling. You can add fancy little icons with animations using the `leftIcon` and `rightIcon` props. These icons should be names from the icons list (see `components/helpers/icons`).

Change the color with themes, not on the button itself!

```
<Button rightIcon="checkmark">Ok</Button>
```

```
<ThemeProvider theme={secondaryTheme}>
  <Button>Secondary!</Button>
</ThemeProvider>
```
