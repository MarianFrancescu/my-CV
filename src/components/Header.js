import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header>
            <h1>task { props.title }</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propType = {
    title: PropTypes.string,
}

export default Header
