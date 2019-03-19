import PropTypes from 'prop-types';

const nodeShape = {
    category: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    label: PropTypes.node.isRequired,
    showCheckbox: PropTypes.bool,
    title: PropTypes.string,
};

const nodeShapeWithChildren = PropTypes.oneOfType([
    PropTypes.shape(nodeShape),
    PropTypes.shape({
        ...nodeShape,
        children: PropTypes.arrayOf(nodeShape).isRequired,
    }),
]);

export default nodeShapeWithChildren;
