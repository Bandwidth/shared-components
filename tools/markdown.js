'use strict';
var VerEx = require('verbal-expressions');
var fs = require('fs');
var path = require('path');

var exampleLineReg = VerEx()
  .startOfLine()
  .anything()
  .then('@example ')
  .anythingBut('\n');

function stringOfLength(string, length) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    newString += string;
  }
  return newString;
}

function generateTitle(name) {
  return name + '\n' + stringOfLength('=', name.length) + '\n';
}

function generateDesciption(description) {
  description = exampleLineReg.replace(description, '');
  return description ? description + '\n' : '';
}

function generatePropType(type) {
  var values;
  if (Array.isArray(type.value)) {
    values =
      '(' +
      type.value
        .map(function(typeValue) {
          return typeValue.name || typeValue.value;
        })
        .join('|') +
      ')';
  } else {
    values = type.value;
  }

  return type.name + (values ? values : '');
}

function generatePropDefaultValue(value) {
  return value.value;
}

function generateProp(propName, prop) {
  prop.defaultValue = prop.defaultValue
    ? generatePropDefaultValue(prop.defaultValue)
    : '';
  prop.description = prop.description ? prop.description : '';
  prop.type = prop.type ? generatePropType(prop.type) : '';
  prop.required = prop.required ? 'Yes' : 'No';

  return (
    propName +
    '|' +
    prop.type.replace('|', '\\|') +
    '|' +
    prop.defaultValue +
    '|' +
    prop.required +
    '|' +
    prop.description
  );
}

function generateProps(props) {
  var propsTitle = 'Props';

  return (
    propsTitle +
    '\n' +
    stringOfLength('-', propsTitle.length) +
    '\n\n' +
    'Prop                  | Type     | Default                   | Required | Description' +
    '\n' +
    '--------------------- | -------- | ------------------------- | -------- | -----------' +
    '\n' +
    Object.keys(props)
      .map(function(propName) {
        return generateProp(propName, props[propName]);
      })
      .join('\n')
  );
}

function generateExample(description, componentPath) {
  var result = exampleLineReg.exec(description);
  if (result) {
    var exampleContent = result[0].replace('@example ', ''),
      examplePath = path.resolve(
        componentPath,
        VerEx()
          .startOfLine()
          .anythingBut('[')
          .exec(exampleContent)[0],
      ),
      exampleLines = VerEx()
        .then('[')
        .word()
        .then('-')
        .word()
        .then(']')
        .exec(exampleContent)[0];

    if (examplePath && exampleLines) {
      var exampleFile = fs.readFileSync(examplePath, { encoding: 'utf8' }),
        startLineNo = exampleLines.split('-')[0].slice(1),
        endLineNo = exampleLines.split('-')[1].slice(0, -1);

      var lines = exampleFile.split('\n'),
        lineNo = 0,
        copiedExampleContent = '';

      while (lineNo < lines.length) {
        if (lineNo >= startLineNo && lineNo < endLineNo) {
          copiedExampleContent += lines[lineNo] + '\n';
        }
        lineNo++;
      }

      var exampleTitle = 'Example:';
      return (
        '\n' +
        exampleTitle +
        '\n' +
        stringOfLength('-', exampleTitle.length) +
        '\n' +
        '```javascript' +
        '\n' +
        copiedExampleContent +
        '\n' +
        '```'
      );
    }
  }

  return '';
}

function generateMarkdown(name, reactAPI, componentPath) {
  var markdownString =
    generateTitle(name) +
    '\n' +
    generateDesciption(reactAPI.description) +
    '\n' +
    generateProps(reactAPI.props) +
    '\n' +
    generateExample(reactAPI.description, path.dirname(componentPath));

  return markdownString;
}

module.exports = generateMarkdown;
