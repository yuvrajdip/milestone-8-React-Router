import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className='flex flex-col  text-center bg-blue-500 rounded-md p-4 text-white'>
      <h2>
        <span className='text-7xl font-bold'>{price}</span>
        <span className='text-3xl'>/mon</span>
      </h2>
      <h4 className='text-3xl my-8'>{name}</h4>

      <div className="pl-5 flex-grow">
        {
          features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
        }
      </div>

      <button className='bg-orange-500 text-black p-2 w-5/6 font-medium m-4'>Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object
}

export default PriceOption;