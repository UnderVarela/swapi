async function fetchDog () {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await response.json()
  return data
}

function FetchApp () {
 
  return (
    <>
      <h1 className='text-4xl'>Fetch</h1>
    </>
  )
}

export default FetchApp
