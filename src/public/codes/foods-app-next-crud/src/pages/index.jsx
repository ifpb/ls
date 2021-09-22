import App from '../components/App';
import { FoodContextProvider } from '../contexts/FoodContext';

export default function Home() {
  return (
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
  );
}
