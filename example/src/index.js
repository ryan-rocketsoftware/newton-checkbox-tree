import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxTree from '../../src/js/CheckboxTree';
import './scss/style.scss';

const nodes = [{
    id: 'NWTDB4',
    label: 'NWTDB4',
    category: 'Database',
    showIcon: false,
    children: [{
        id: 'NWTDB4.NWTTS1',
        label: 'NWTDB4.NWTTS1',
        category: 'Tablespace',
        showIcon: false,
        children: [{
            id: 'NWT04.NWTTB1',
            label: 'NWT04.NWTTB1',
            category: 'Table',
            showIcon: false,
            children: [{
                id: 'NWTDB4.NWALS1',
                label: 'NWTDB4.NWALS1',
                category: 'Alias',
                showIcon: false,
            }, {
                id: 'NWT04.NWTSY1',
                label: 'NWT04.NWTSY1',
                category: 'Synonym',
                showIcon: false,
            }],
        }],
    }, {
        id: 'NWT04.NWTVW2',
        label: 'NWT04.NWTVW2',
        category: 'View',
        showIcon: false,
        children: [{
            id: 'NWT04.NWTTB2',
            label: 'NWT04.NWTTB2',
            category: 'Table',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            id: 'NWTDB4.NWALS2',
            label: 'NWTDB4.NWALS2',
            category: 'Alias',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            id: 'NWT04.NWTSY2',
            label: 'NWT04.NWTSY2',
            category: 'Synonym',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }],
    }, {
        id: 'NWTDB4.NWTTS3',
        label: 'NWTDB4.NWTTS3',
        category: 'Tablespace',
        showIcon: false,
        children: [{
            id: 'NWT04.NWTTB3',
            label: 'NWT04.NWTTB3',
            category: 'Table',
            showIcon: false,
            children: [{
                id: 'NWTDB4.NWALS3',
                label: 'NWTDB4.NWALS3',
                category: 'Alias',
                showIcon: false,
            }, {
                id: 'NWT04.NWTSY3',
                label: 'NWT04.NWTSY3',
                category: 'Synonym',
                showIcon: false,
            }],
        }],
    }, {
        id: 'NWT04.NWTVW4',
        label: 'NWT04.NWTVW4',
        category: 'View',
        showIcon: false,
        children: [{
            id: 'NWT04.NWTTB4',
            label: 'NWT04.NWTTB4',
            category: 'Table',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            id: 'NWTDB4.NWALS4',
            label: 'NWTDB4.NWALS4',
            category: 'Alias',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            id: 'NWT04.NWTSY4',
            label: 'NWT04.NWTSY4',
            category: 'Synonym',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }],
    }],
}];

const nodes2 = [{
    id: 'NWTDB4',
    label: 'NWTDB4',
    category: 'Database',
    showIcon: false,
    children: [{
        id: 'NWTDB4.NWTTS1',
        label: 'NWTDB4.NWTTS1',
        category: 'Tablespace',
        showIcon: false,
        children: [{
            id: 'NWT04.NWTTB1',
            label: 'NWT04.NWTTB1',
            category: 'Table',
            showIcon: false,
            children: [{
                id: 'NWTDB4.NWALS1',
                label: 'NWTDB4.NWALS1',
                category: 'Alias',
                showIcon: false,
            }, {
                id: 'NWT04.NWTSY1',
                label: 'NWT04.NWTSY1',
                category: 'Synonym',
                showIcon: false,
            }],
        }],
    }, {
        id: 'NWT04.NWTVW2',
        label: 'NWT04.NWTVW2',
        category: 'View',
        showIcon: false,
        children: [{
            id: 'NWT04.NWTTB2',
            label: 'NWT04.NWTTB2',
            category: 'Table',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            id: 'NWTDB4.NWALS2',
            label: 'NWTDB4.NWALS2',
            category: 'Alias',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            id: 'NWT04.NWTSY2',
            label: 'NWT04.NWTSY2',
            category: 'Synonym',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }],
    }, {
        id: 'NWTDB4.NWTTS3',
        label: 'NWTDB4.NWTTS3',
        category: 'Tablespace',
        showIcon: false,
        children: [{
            id: 'NWT04.NWTTB3',
            label: 'NWT04.NWTTB3',
            category: 'Table',
            showIcon: false,
            children: [{
                id: 'NWTDB4.NWALS3',
                label: 'NWTDB4.NWALS3',
                category: 'Alias',
                showIcon: false,
            }, {
                id: 'NWT04.NWTSY3',
                label: 'NWT04.NWTSY3',
                category: 'Synonym',
                showIcon: false,
            }],
        }],
    }, {
        id: 'NWT04.NWTVW4',
        label: 'NWT04.NWTVW4',
        category: 'View',
        showIcon: false,
        children: [{
            id: 'NWT04.NWTTB4',
            label: 'NWT04.NWTTB4',
            category: 'Table',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            id: 'NWTDB4.NWALS4',
            label: 'NWTDB4.NWALS4',
            category: 'Alias',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            id: 'NWT04.NWTSY4',
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
        clicked: {},
    };

    constructor(props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    onCheck(checked, nodeInfo) {
        console.log('onCheck::nodeInfo', nodeInfo);
        this.setState({ checked });
    }

    onClick(clicked) {
        console.log('onClick::clicked', clicked);
        this.setState({ clicked });
    }

    onExpand(expanded, nodeInfo) {
        console.log('onExpand::nodeInfo', nodeInfo);
        this.setState({ expanded });
    }

    render() {
        const { checked, expanded, clicked } = this.state;
        const notClickedText = '(none)';

        return (
            <React.Fragment>
                <h2>No Cascade, Get Info onClick</h2>
                <div className="clickable-labels">
                    <CheckboxTree
                        showNodeIcon={true}
                        checked={checked}
                        expanded={expanded}
                        nodes={nodes}
                        onCheck={this.onCheck}
                        onClick={this.onClick}
                        onExpand={this.onExpand}
                        noCascade={false}
                    />
                    <div className="clickable-labels-info">
                        <strong>CLICKED NODE</strong>: {!clicked.id ? notClickedText : ""}
                        <br />
                        <div className={!clicked.id ? "demo-hide-nodeinfo" : "demo-show-nodeinfo"}>
                            {clicked.id}<br />
                        <label>{clicked.category}</label><br />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
