import React from 'react'
import formcss from '../style/form.css'

const Formgame = () => {
  return (
    <main>
      <form className='form' action="">
        <input className='form_input' onSubmit={0} placeholder='Buscar Juego...'/>
        <button className='form__btn' type=''>Buscar</button>

      </form>
    </main>
  )
}

export default Formgame