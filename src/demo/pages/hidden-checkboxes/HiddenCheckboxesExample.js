import React from 'react';
import CheckboxTree from '../../../js/CheckboxTree';

import '../../../scss/newton-checkbox-tree.scss';

const nodes = [
    {
        id: 'favorite-empires',
        label: 'Favorite Empires',
        children: [
            {
                id: 'classical-era',
                label: 'Classical Era',
                children: [
                    {
                        id: 'persian',
                        label: 'First Persian Empire',
                    },
                    {
                        id: 'qin',
                        label: 'Qin Dynasty',
                    },
                    {
                        id: 'spqr',
                        label: 'Roman Empire',
                    },
                ],
            },
            {
                id: 'medieval-era',
                label: 'Medieval Era',
                children: [
                    {
                        id: 'abbasid',
                        label: 'Abbasid Caliphate',
                    },
                    {
                        id: 'byzantine',
                        label: 'Byzantine Empire',
                    },
                    {
                        id: 'holy-roman',
                        label: 'Holy Roman Empire',
                    },
                    {
                        id: 'ming',
                        label: 'Ming Dynasty',
                    },
                    {
                        id: 'mongol',
                        label: 'Mongol Empire',
                    },
                ],
            },
            {
                id: 'modern-era',
                label: 'Modern Era',
                children: [
                    {
                        id: 'aztec',
                        label: 'Aztec Empire',
                    },
                    {
                        id: 'british',
                        label: 'British Empire',
                    },
                    {
                        id: 'inca',
                        label: 'Inca Empire',
                    },
                    {
                        id: 'qing',
                        label: 'Qing Dynasty',
                    },
                    {
                        id: 'russian',
                        label: 'Russian Empire',
                    },
                    {
                        id: 'spanish',
                        label: 'Spanish Empire',
                    },
                ],
            },
        ],
    },
];

class HiddenCheckboxesExample extends React.Component {
    state = {
        checked: [
            'persian',
            'spqr',
            'byzantine',
            'holy-roman',
            'inca',
        ],
        expanded: [
            'favorite-empires',
            'classical-era',
            'medieval-era',
        ],
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
                onlyLeafCheckboxes
                onCheck={this.onCheck}
                onExpand={this.onExpand}
            />
        );
    }
}

export default HiddenCheckboxesExample;
