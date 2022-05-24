import { useEffect, useState } from 'react';

const MercadoLibre = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
      .then((response) => {
        return response.json(); //convertir la respuesta a json
      })
      .then((json) => {
        setProductos(json.results);
      });
  }, []);

  return (
    <div>
      <h1> MercadoLibre </h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h2> {producto.title} </h2>
            <img src={producto.thumbnail} alt={producto.title} />
            <p> {producto.price} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MercadoLibre;
