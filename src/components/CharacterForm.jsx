import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from '../hooks/useForm'

export function CharacterForm ({ onAddCharacter }) {
  const { nombre, peso, altura, handleChange } = useForm({ nombre: '', peso: 0, altura: 0 })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Nombre: ${nombre}, Peso: ${peso}, Altura: ${altura}`)
    onAddCharacter({ id: uuidv4(), name: nombre, mass: peso, height: altura })
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
      <div className='mb-4'>
        <label htmlFor='nombre' className='block text-gray-700 font-bold mb-2'>
          Nombre
        </label>
        <input
          required
          type='text'
          id='nombre'
          name='nombre'
          onChange={handleChange}
          value={nombre}
          placeholder='Introduce tu nombre'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='peso' className='block text-gray-700 font-bold mb-2'>
          Peso (kg)
        </label>
        <input
          type='number'
          id='peso'
          name='peso'
          onChange={handleChange}
          value={peso}
          placeholder='Introduce tu peso'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='altura' className='block text-gray-700 font-bold mb-2'>
          Altura (cm)
        </label>
        <input
          type='number'
          name='altura'
          id='altura'
          onChange={handleChange}
          value={altura}
          placeholder='Introduce tu altura'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <button
        type='submit'
        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Enviar
      </button>
    </form>
  )
}

CharacterForm.propTypes = {
  onAddCharacter: PropTypes.func.isRequired
}
