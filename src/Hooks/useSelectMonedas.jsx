import React from 'react'

const useSelectMonedas = () => {

  const selectMonedas = () => {
    console.log("Desde el Custom Hook")
  }

  return [selectMonedas]

}

export default useSelectMonedas 