import PropTypes from 'prop-types';

import { useState } from "react";

export default function CheckOption({title, description, price,time,selected=false,handleSelectedOption}) {
  const [isSelected, setIsSelected] = useState(selected);

  const handleOnChange = () => {
    handleSelectedOption(!selected)
    setIsSelected(!selected)
  }
  return (
    <article className={`flex gap-3 items-center px-4 border border-gray-200 rounded-lg hover:border-purpishBlue cursor-pointer ${isSelected ? 'bg-magnolia border-purpishBlue': ''}`}>
      <input
        id='bordered-checkbox-1'
        type='checkbox'
        name='bordered-checkbox'
        value={selected}
        checked={selected}
        onChange={handleOnChange}
        className="w-5 h-5 text-purpishBlue bg-gray-100 border-gray-300 rounded focus:ring-0 focus:ring-transparent cursor-pointer"
      />
      <div
        htmlFor='bordered-checkbox-1'
        className='w-full py-4 ml-2 text-sm'
      >
        <p className="text-base text-marineBlue font-medium">{title}</p>
        <p className="text-xs text-coolGray  font-normal">{description}</p>
      </div>
        <span className="text-sm text-purpishBlue">+${price}/{time}</span>
    </article>
  );
}


// Prop types validation
CheckOption.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  time: PropTypes.string,
  selected: PropTypes.bool,
  handleSelectedOption: PropTypes.func.isRequired,
};
