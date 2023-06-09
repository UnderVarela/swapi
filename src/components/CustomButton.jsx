import PropTypes from 'prop-types'
import React from 'react'

export function CustomButton ({ onCustomClick, children }) {
  const handleClick = () => {
    onCustomClick()
  }
  return (
    <button
      onClick={() => handleClick()}
      className='px-3 py-1 text-white transition ease-in-out bg-blue-700 rounded duration-00 hover:bg-blue-500'
    >

      {children}
    </button>
  )
}

CustomButton.propTypes = {
  children: PropTypes.any,
  onCustomClick: PropTypes.func
}
