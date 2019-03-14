import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import CheckboxTree from '../js/CheckboxTree';

import '../demo/scss/style.scss';

const nodes2 = [{
    value: 'NWTDB4',
    label: 'NWTDB4',
    category: 'Database',
    showIcon: false,
    children: [{
        value: 'NWTDB4.NWTTS1',
        label: 'NWTDB4.NWTTS1',
        category: 'Tablespace',
        showIcon: false,
        children: [{
            value: 'NWT04.NWTTB1',
            label: 'NWT04.NWTTB1',
            category: 'Table',
            showIcon: false,
            children: [{
                value: 'NWTDB4.NWALS1',
                label: 'NWTDB4.NWALS1',
                category: 'Alias',
                showIcon: false,
            }, {
                value: 'NWT04.NWTSY1',
                label: 'NWT04.NWTSY1',
                category: 'Synonym',
                showIcon: false,
            }],
        }],
    }, {
        value: 'NWT04.NWTVW2',
        label: 'NWT04.NWTVW2',
        category: 'View',
        showIcon: false,
        children: [{
            value: 'NWT04.NWTTB2',
            label: 'NWT04.NWTTB2',
            category: 'Table',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            value: 'NWTDB4.NWALS2',
            label: 'NWTDB4.NWALS2',
            category: 'Alias',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            value: 'NWT04.NWTSY2',
            label: 'NWT04.NWTSY2',
            category: 'Synonym',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }],
    }, {
        value: 'NWTDB4.NWTTS3',
        label: 'NWTDB4.NWTTS3',
        category: 'Tablespace',
        showIcon: false,
        children: [{
            value: 'NWT04.NWTTB3',
            label: 'NWT04.NWTTB3',
            category: 'Table',
            showIcon: false,
            children: [{
                value: 'NWTDB4.NWALS3',
                label: 'NWTDB4.NWALS3',
                category: 'Alias',
                showIcon: false,
            }, {
                value: 'NWT04.NWTSY3',
                label: 'NWT04.NWTSY3',
                category: 'Synonym',
                showIcon: false,
            }],
        }],
    }, {
        value: 'NWT04.NWTVW4',
        label: 'NWT04.NWTVW4',
        category: 'View',
        showIcon: false,
        children: [{
            value: 'NWT04.NWTTB4',
            label: 'NWT04.NWTTB4',
            category: 'Table',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            value: 'NWTDB4.NWALS4',
            label: 'NWTDB4.NWALS4',
            category: 'Alias',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            value: 'NWT04.NWTSY4',
            label: 'NWT04.NWTSY4',
            category: 'Synonym',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }],
    }],
}];

const state = {
    checked: [
        'NWTDB4',
        'NWT04.NWTSY1',
        'NWTDB4.NWALS3',
        'NWT04.NWTSY3',
        'NWT04.NWTVW4',
    ],
    expanded: [
        'NWTDB4',
        'NWTDB4.NWTTS1',
        'NWT04.NWTVW2'
    ],
};

/* let onCheck = (checked) => {
    console.log('checked', checked);
    state.checked.push({checked});
}

let onExpand = (expanded) => {
    console.log('expanded', expanded);
    state.expanded.push({expanded});
} */

storiesOf('CheckboxTree', module)
  .add('basic example', () => {

    const onCheck = action('check');
    const onExpand = action('expand');

    const showNodeIcon = boolean('showNodeIcon', true);
    const noCascade = boolean('noCascade', true);
    const nodes = object('nodes', [{
        value: 'NWTDB4',
        label: 'NWTDB4',
        category: 'Database'
    }]);

    return (
        <CheckboxTree
            showNodeIcon={showNodeIcon}
            checked={state.checked}
            expanded={state.expanded}
            nodes={nodes}
            onCheck={onCheck}
            onExpand={onExpand}
            noCascade={noCascade}
        />
    )
  });
