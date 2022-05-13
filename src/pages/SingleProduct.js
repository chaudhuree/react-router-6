import { Link, useParams } from 'react-router-dom';
const SingleProduct = () => {
  const {id} = useParams();
  return (
    <section className='section product'>
      <h2>single product id: {id}</h2>
      <Link to='/products'>back to product page</Link>
    </section>
  );
};

export default SingleProduct;
