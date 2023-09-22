import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Feature = ({feature}) => {

  return (
    <div>
      <p className='flex items-center gap-5'> <BsFillPatchCheckFill></BsFillPatchCheckFill>{feature}</p>
    </div>
  );
};

export default Feature;