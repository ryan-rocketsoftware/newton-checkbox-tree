import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxTree from '../../src/js/CheckboxTree';
import './scss/style.scss';

const nodes = [{
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

class App extends React.Component {
    state = {
        checked: [
            'NWTDB4',
            'NWT04.NWTSY1',
            'NWTDB4.NWALS3',
            'NWT04.NWTSY3',
            'NWT04.NWTVW4',
        ],
        expanded: [
            'NWTDB4',
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
                showNodeIcon={true}
                checked={checked}
                expanded={expanded}
                nodes={nodes}
                onCheck={this.onCheck}
                onExpand={this.onExpand}
                noCascade={true}
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
