import PropTypes from 'prop-types';
import { CardImage, Container } from './styles';
import { CartButton } from '../CartButton';

export function CardProduct({ product }) {

  return (
    <div>
      <Container>
        <CardImage src={product.url} alt={product.name} />
        <div>
          <p>{product.name}</p>
          <strong>{product.currencyValue}</strong>
        </div>
        <CartButton></CartButton>
      </Container>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
