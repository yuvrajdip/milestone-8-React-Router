import PropTypes from 'prop-types'; // ES6

const Link = ({route}) => {
  return (
    <li className="hover:bg-slate-400 w-32 md:mr-10 sm:px-10 md:px-0 cursor-pointer text-center">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route : PropTypes.object
}

export default Link;