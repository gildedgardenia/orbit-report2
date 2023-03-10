import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import App from './App';
import data from './satellites.json';
import Table from './components/Table';

test('renders learn header', () => {
  render(<App />);
  const headerElement = screen.getByText("Orbit Report");
  expect(headerElement).toBeInTheDocument();
});

test('table component', () => {
  const testRenderer = TestRenderer.create(
    <Table satellites={data.satellites}/>
  );
  expect(testRenderer.toJSON()).toMatchSnapshot();
});






