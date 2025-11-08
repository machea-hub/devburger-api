import { TrashIcon } from '@phosphor-icons/react';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { Table } from '../index';
import { ButtonGroup, EmptyCart, ProductImage } from './styles';

export function CartItens() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
    useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt={product.name} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button type="button" onClick={() => decreaseProduct(product.id)}>-</button>

                  {product.quantity}

                  <button type="button" onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                {formatPrice(product.quantity * product.price)}
              </Table.Td>
              <Table.Td>
                <TrashIcon
                  color="#9e1c00"
                  size={20}
                  cursor="pointer"
                  onClick={() => deleteProduct(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <EmptyCart>Carrinho vazio</EmptyCart>
        )}
      </Table.Body>
    </Table.Root>
  );
}
