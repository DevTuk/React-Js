import ItemDetail from './ItemDetail';

const ItemListDetail = ({ detail }) => {
  return (
    <>
      {detail.map((item) => (
        <ItemDetail
          key={item.id}
          id={item.id}
          nombre={item.nombre}
          precio={item.precio}
          imagen={item.imagen}
          stock={item.stock}
          descripcion={item.descripcion}
        />
      ))}
    </>
  );
};

export default ItemListDetail;
