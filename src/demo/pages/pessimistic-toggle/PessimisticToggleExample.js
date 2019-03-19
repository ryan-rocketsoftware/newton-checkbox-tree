import React from 'react';
import CheckboxTree from '../../../js/CheckboxTree';

import '../../../scss/newton-checkbox-tree.scss';

const nodes = [
    {
        id: '/app',
        label: 'app',
        children: [
            {
                id: '/app/Http',
                label: 'Http',
                children: [
                    {
                        id: '/app/Http/Controllers',
                        label: 'Controllers',
                        children: [{
                            id: '/app/Http/Controllers/WelcomeController.js',
                            label: 'WelcomeController.js',
                        }],
                    },
                    {
                        id: '/app/Http/routes.js',
                        label: 'routes.js',
                    },
                ],
            },
            {
                id: '/app/Providers',
                label: 'Providers',
                children: [{
                    id: '/app/Http/Providers/EventServiceProvider.js',
                    label: 'EventServiceProvider.js',
                }],
            },
        ],
    },
    {
        id: '/config',
        label: 'config',
        children: [
            {
                id: '/config/app.js',
                label: 'app.js',
            },
            {
                id: '/config/database.js',
                label: 'database.js',
            },
        ],
    },
    {
        id: '/public',
        label: 'public',
        children: [
            {
                id: '/public/assets/',
                label: 'assets',
                children: [{
                    id: '/public/assets/style.css',
                    label: 'style.css',
                }],
            },
            {
                id: '/public/index.html',
                label: 'index.html',
            },
        ],
    },
    {
        id: '/.env',
        label: '.env',
    },
    {
        id: '/.gitignore',
        label: '.gitignore',
    },
    {
        id: '/README.md',
        label: 'README.md',
    },
];

class PessimisticToggleExample extends React.Component {
    state = {
        checked: [
            '/app/Http/Controllers/WelcomeController.js',
            '/app/Http/routes.js',
            '/public/assets/style.css',
            '/public/index.html',
            '/.gitignore',
        ],
        expanded: [
            '/app',
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
                optimisticToggle={false}
                onCheck={this.onCheck}
                onExpand={this.onExpand}
            />
        );
    }
}

export default PessimisticToggleExample;
