import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Makeup from '../components/Makeup';
import store from '../redux/store';

describe('Test Rockets component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Makeup />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});