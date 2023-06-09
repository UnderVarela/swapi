import PropTypes from 'prop-types'
export function CharacterList ({ characters = [] }) {
  // console.log('Soy character')
  return (
    <ul className='mt-4 overflow-hidden bg-white divide-y divide-gray-200 rounded-md shadow-md'>
      {
        characters.map(({ id, name, mass, height }) => (
          <li key={id} className='px-6 py-4'>
            <p className='font-semibold text-gray-900'>{name}</p>
            <p className='text-gray-500'>Peso: {mass} /Altura: {height}</p>
          </li>
        ))
      }
    </ul>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array
}
