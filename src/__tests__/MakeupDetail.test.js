import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MakupDetail from '../components/MakupDetail';
import store from '../redux/store';

describe('MakupDetail component', () => {
  it('should render correctly', () => {
    const makeup = {
      id: 1,
      name: 'Product Name',
      product_type: 'Type',
      price: 10,
      price_sign: '$',
      description: 'Product Description',
      product_colors: [
        { hex_value: '#ffffff', colour_name: 'White' },
        { hex_value: '#000000', colour_name: 'Black' },
      ],
      image_link: 'https://example.com/image.png',
    };

    const { container } = render(
      <Provider store={store}>
        <MakupDetail makeup={makeup} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
