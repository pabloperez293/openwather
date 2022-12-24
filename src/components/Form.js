import React, { useState } from 'react'

const Form = () => {
    const [city, setCity] = useState("")

    const onSubmit = (evt) => {
        evt.preventDefault()
        console.log({city})

        if(city === "" || !city) return;
    }

  return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className='input-group mb-3 mx-auto'>
                    <input type="text" className='form-control text-center' placeholder='Ciudad' onChange={(evt) => setCity(evt.target.value)} />
                    <button className='btn btn-primary input-group-text' type='submit' > Buscar </button>            
                </div>
            </form>
        </div>
    )
}

export default Form