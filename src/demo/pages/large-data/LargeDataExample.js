import React from 'react';
import CheckboxTree from '../../../js/CheckboxTree';

import '../../../scss/newton-checkbox-tree.scss';

const parents = [];

for (let i = 0; i < 100; i += 1) {
    const children = [];

    for (let j = 0; j < 200; j += 1) {
        children.push({
            id: `node-0-${i}-${j}`,
            label: `Node 0-${i}-${j}`,
        });
    }

    parents.push({
        id: `node-0-${i}`,
        label: `Node 0-${i}`,
        children,
    });
}

const nodes = [{
    id: 'node-0',
    label: 'Node 0',
    children: parents,
}];

class LargeDataExample extends React.Component {
    state = {
        checked: [],
        expanded: [],
    };

    constructor(props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    onCheck(checked) {
        this.setState({ checked });
    }

    onExpand(expanded) {
        this.setState({ expanded });
    }

    render() {
        const { checked, expanded } = this.state;

        return (
            <CheckboxTree
                checked={checked}
                expanded={expanded}
                nodes={nodes}
                onCheck={this.onCheck}
                onExpand={this.onExpand}
            />
        );
    }
}

export default LargeDataExample;
