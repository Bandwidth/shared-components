RadioGroup is a fully functional input. It generates its own radio buttons from the options you supply. You can use it manually by passing in `value` and `onChange` props. It's a controlled component, so it won't update its own value.

**Multiple Radio options**
```
<RadioGroup 
    onChange={()=>null} 
    choices={['Foo', 'Bar']} 
    />
```

**Radio Option with selected value**
```
<RadioGroup 
    value="Foo"
    onChange={()=>null} 
    choices={['Foo', 'Bar']} 
    />
```

