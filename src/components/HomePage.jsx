import React, { useState } from 'react'

const HomePage = () => {
  const [img, setImage] = useState();
  const [base64, setBase64] = useState('');

  const changeVal = (e) => {
    e.preventDefault()
    setImage(e.target.files[0])
  }

  const hanlde = () => {
    const reader = new FileReader()
    reader.readAsDataURL(img)

    reader.onload = (e) => {
      setBase64(e.target.result)
    }
  }

  console.log(base64)
  
  return (
    <div>
      Home Page
      <input
      type="file"
      name="image"
      // value={img}
      onChange={changeVal}
      />
      <img src={`data:image/jpg;base64,${base64}`} />
      <button onClick={hanlde}>asd</button>
    </div>
  )
}

export default HomePage
