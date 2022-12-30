import ListCard from './ListCard';
import {useContext} from 'react';
import {Context} from '../context/Context';

function ShowList(){
  const { products } = useContext(Context)

  if (products.length === 0) {
    return <h1>
      No hay productos agregados
    </h1>
  }

  return (
    <div>
      {products.map((product) =>(
        <ListCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ShowList 
