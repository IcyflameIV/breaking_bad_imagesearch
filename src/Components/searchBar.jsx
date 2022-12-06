import React, { useState } from 'react'

function SearchBar({setQuery}) {
  const [text, setText] = useState("")
  const handleChange =  (e) =>{
    setText(e.target.value)
    setQuery(e.target.value)
  }
  return (
    <div>
      <section>
        <form>
          <input className='form-control' placeholder='Search Characters'
          autoFocus
          type = 'text'
          name = 'search'
          value = {text}
          onChange = {handleChange}
          id = 'search'
          />
        </form>
      </section>
    </div>
  )
}

export default SearchBar