import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51SQuTvQsuJPblAyLVuzp8mTsNIroXYHdzXppQyLXrPkfSSZ35cpzAN1dSxaUZVPTXBT7hv0vMxjqtm2YrYP9a51h00wS9ZC6Po',
);

export default stripePromise;
