
import React from "react";
import {useContext, useState} from 'react';
import {Context} from '../context/Context';

function Home() {
  const [item, setItem] = useState('')
  const [piece, setPiece] =useState('')
  const [description, setDescription] = useState('')
  const [presentation, setPresentation] = useState('')

const { createProduct} = useContext(Context)

 
  const handleSubmit = (e)=>{
    e.preventDefault()
    createProduct({
      item, piece, description, presentation
    })

  setItem('')
  setPiece('')
  setDescription('')
  setPresentation('')
  }
 
return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Añade tu producto </h1>
        <input
          
          type="text"
          value={item}
          name="item"
          onChange={(e)=>setItem(e.target.value)}
          placeholder="Add item"
        />
        <input
          className=""
          type="number"
          value={piece}
          name="piece"
          onChange={(e)=>setPiece(e.target.value)}
          placeholder="Add piece"
        />
        <input
          className=""
          type="text"
          value={description}
          name="description"
          onChange={(e)=>setDescription(e.target.value)}
          placeholder="Add description"
        />
        <input
          className=""
          type="text"
          value={presentation}
          name="presentation"
          onChange={(e)=>setPresentation(e.target.value)}
          placeholder="Add presentation"
        />

        <button className="btn cyan" name="send" type="submit"> GUARDAR 
        </button>

     
      </form>
    </div>
  );
}

export default Home;
