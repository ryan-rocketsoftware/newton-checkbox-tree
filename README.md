# newton-checkbox-tree

## Overview

Newton Checkbox Tree component renders a tree of items that contain configurable checkboxes, icons, labels and events. The component is extensible and customizable at the global and individual node level. The style used within the component is implemented with IBM Carbon Design System framework.

The build, test, serve, package and deploy tasks use modern tooling and practices with Parcel, Jest, Enzyme, Storybook and Babel. All of the tasks are extrememly simple to execute which allows for excellent development environment.

This component is part of the Newton Component family. Eventually it will be moved into the Newton Common Component library.

## DEVELOPMENT

#### SETUP DEVELOPMENT ENVIRONMENT

Quick overview for getting your local development environment setup for development, browsing and publishing. Below are all of the commands needed to build, test, run and publish the component.

#### CLONE REPOSITORY ####

```
git clone https://github.com/ryan-rocketsoftware/newton-checkbox-tree.git
```

#### COMMANDS ####
- `clean` - Deletes dist, demo, build, cache and storybook folders
- `clean:dist` - Deletes dist folder
- `clean:demo` - Deletes demo folder
- `clean:build` - Deletes build folder
- `clean:cache` - Deletes cache folder
- `clean:storybook` - Deletes storybook folder
- `start:demo` - Run demo in the browser
- `build:demo` - Bundle demo application
- `publish:demo` - Deploy demo to gh-pages branch
- `build` - Transpile scss and javascript for production
- `build:css` - Transpile scss to css for production
- `build:commonjs` - Transpile javascript to commonjs for production
- `build:esmodules` - Transpile javascript to esmodule for production
- `start:dev` - Run demo in the browser with original source
- `start:prod` - Run demo in the browser with production bundle
- `start:examples:*` - Run specified demo in the browser. Replace the * with the name of the demo.
- `test` - Run tests
- `test:details` - Run tests with details
- `test:coverage` - Run tests with code coverage
- `test:snapshot:cleanup` - Remove old outdated snapshots prior to running tests
- `storybook` - Run storybook stories in browser
- `build-storybook` - Build storybook stories
- `build-source-map` - Bundle source map for analyzer
- `view-source-map` - View application depenendency tree and bundle size

## HOW TO USE

#### INSTALL ####

Add the component to your React application with npm or yarn.

Using yarn:

```
yarn add newton-checkbox-tree
```

Using npm:

```
npm install newton-checkbox-tree --save
```

> **Note** &ndash; This library makes use of [Font Awesome](http://fontawesome.io/) styles and expects them to be loaded in the browser.


#### INCLUDE CSS

For your convenience, the library's styles can be consumed utilizing one of the following files:

* `newton-checkbox-tree/dist/css/newton-checkbox-tree.css`
* `newton-checkbox-tree/src/scss/newton-checkbox-tree.scss`

Either include one of these files in your stylesheets or utilize a CSS loader:

``` javascript
import 'newton-checkbox-tree/dist/css/newton-checkbox-tree.css';
import 'newton-checkbox-tree/src/scss/newton-checkbox-tree.scss';
```

#### RENDER COMPONENT

A quick usage example is included below. Note that the newton-checkbox-tree component is [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components). In other words, it is stateless. You must update its `checked` and `expanded` properties whenever a change occurs.

``` jsx
import React from 'react';
import CheckboxTree from 'newton-checkbox-tree';

const nodes = [{
    value: 'user',
    label: 'user',
    category: 'table',
    children: [
        { value: 'name', label: 'name', category: 'field' },
        { value: 'address', label: 'address', category: 'field' },
    ],
}];

class Widget extends React.Component {
    state = {
        checked: [],
        expanded: [],
    };

    render() {
        return (
            <CheckboxTree
                nodes={nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
            />
        );
    }
}
```

All node objects **must** have a unique `value`. This value is serialized into the `checked` and `expanded` arrays and is also used for performance optimizations.

#### CHANGING DEFAULT ICONS

By default, **newton-checkbox-tree** uses Font Awesome for the various icons that appear in the tree. To change the defaults, simply pass in the `icons` property and override the defaults. Note that you can override as many or as little icons as you like:

``` jsx
<CheckboxTree
    ...
    icons={{
        check: <span className="rct-icon rct-icon-check" />,
        uncheck: <span className="rct-icon rct-icon-uncheck" />,
        halfCheck: <span className="rct-icon rct-icon-half-check" />,
        expandClose: <span className="rct-icon rct-icon-expand-close" />,
        expandOpen: <span className="rct-icon rct-icon-expand-open" />,
        expandAll: <span className="rct-icon rct-icon-expand-all" />,
        collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
        parentClose: <span className="rct-icon rct-icon-parent-close" />,
        parentOpen: <span className="rct-icon rct-icon-parent-open" />,
        leaf: <span className="rct-icon rct-icon-leaf" />,
    }}
/>
```

If you are using the [`react-fontawesome`](https://github.com/FortAwesome/react-fontawesome) library, you can also directly substitute those icons:

``` jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
...

<CheckboxTree
    ...
    icons={{
        check: <FontAwesomeIcon className="rct-icon rct-icon-check" icon="check-square" />,
        uncheck: <FontAwesomeIcon className="rct-icon rct-icon-uncheck" icon={['far', 'square']} />,
        halfCheck: <FontAwesomeIcon className="rct-icon rct-icon-half-check" icon="check-square" />,
        expandClose: <FontAwesomeIcon className="rct-icon rct-icon-expand-close" icon="chevron-right" />,
        expandOpen: <FontAwesomeIcon className="rct-icon rct-icon-expand-open" icon="chevron-down" />,
        expandAll: <FontAwesomeIcon className="rct-icon rct-icon-expand-all" icon="plus-square" />,
        collapseAll: <FontAwesomeIcon className="rct-icon rct-icon-collapse-all" icon="minus-square" />,
        parentClose: <FontAwesomeIcon className="rct-icon rct-icon-parent-close" icon="folder" />,
        parentOpen: <FontAwesomeIcon className="rct-icon rct-icon-parent-open" icon="folder-open" />,
        leaf: <FontAwesomeIcon className="rct-icon rct-icon-leaf-close" icon="file" />
    }}
/>
```

#### COMPONENT PROPERTIES

| Property             | Type     | Description                                                                                                            | Default     |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- | ----------- |
| `nodes`              | array    | **Required**. Specifies the tree nodes and their children.                                                             |             |
| `checked`            | array    | An array of checked node values.                                                                                       | `[]`        |
| `disabled`           | bool     | If true, the component will be disabled and nodes cannot be checked.                                                   | `false`     |
| `expandDisabled`     | bool     | If true, the ability to expand nodes will be disabled.                                                                 | `false`     |
| `expandOnClick`      | bool     | If true, nodes will be expanded by clicking on labels. Requires a non-empty `onClick` function.                        | `false`     |
| `icons`              | object   | An object containing the mappings for the various icons and their components. See **Changing the Default Icons**.      | `{ ... }`   |
| `id`                 | string   | A string to be used for the HTML ID of the rendered tree and its nodes.                                                | `null`      |
| `expanded`           | array    | An array of expanded node values.                                                                                      | `[]`        |
| `lang`               | object   | An object containing the language mappings for the various text elements.                                              | `{ ... }`   |
| `name`               | string   | Optional name for the hidden `<input>` element.                                                                        | `undefined` |
| `nameAsArray`        | bool     | If true, the hidden `<input>` will encode its values as an array rather than a joined string.                          | `false`     |
| `nativeCheckboxes`   | bool     | If true, native browser checkboxes will be used instead of pseudo-checkbox icons.                                      | `false`     |
| `noCascade`          | bool     | If true, toggling a parent node will **not** cascade its check state to its children.                                  | `false`     |
| `onlyLeafCheckboxes` | bool     | If true, checkboxes will only be shown for leaf nodes.                                                                 | `false`     |
| `optimisticToggle`   | bool     | If true, toggling a partially-checked node will select all children. If false, it will deselect.                       | `true`      |
| `showExpandAll`      | bool     | If true, buttons for expanding and collapsing all parent nodes will appear in the tree.                                | `false`     |
| `showNodeIcon`       | bool     | If true, each node will show a parent or leaf icon.                                                                    | `true`      |
| `showNodeTitle`      | bool     | If true, the `label` of each node will become the `title` of the resulting DOM node. Overridden by `node.title`.       | `false`     |
| `onCheck`            | function | onCheck handler: `function(checked, targetNode) {}`                                                                    | `() => {}`  |
| `onClick`            | function | onClick handler: `function(targetNode) {}`. If set, `onClick` will be called when a node's label has been clicked.     | `() => {}`  |
| `onExpand`           | function | onExpand handler: `function(expanded, targetNode) {}`                                                                  | `() => {}`  |

#### `onCheck` and `onExpand`

onCheck and onExpand events must be implemented in your React component in order to update newton checkbox tree checked and expanded state. Clicking the checkbox or clicking the expand icon will not update the components state due to the fact that its a stateless component.

#### NODE PROPERTIES

Individual nodes within the `nodes` property can have the following structure:

| Property       | Type   | Description                              | Default |
| -------------- | ------ | ---------------------------------------- | ------- |
| `label`        | mixed  | **Required**. The node's label.          |         |
| `value`        | mixed  | **Required**. The node's value.          |         |
| `children`     | array  | An array of child nodes.                 | `null`  |
| `className`    | string | A className to add to the node.          | `null`  |
| `disabled`     | bool   | Whether the node should be disabled.     | `false` |
| `icon`         | mixed  | A custom icon for the node.              | `null`  |
| `showCheckbox` | bool   | Whether the node should show a checkbox. | `true`  |
| `showIcon`     | bool   | Whether the node should show an icon.    | `true`  |
| `title`        | string | A custom `title` attribute for the node. | `null`  |
| `category`     | string | The node's category.                     | `null`  |
