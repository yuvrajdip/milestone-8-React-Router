import PropTypes from 'prop-types'; // ES6

const Link = ({route}) => {
  return (
    <li className="w-32 md:mr-10 px-6">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route : PropTypes.object
}

export default Link;