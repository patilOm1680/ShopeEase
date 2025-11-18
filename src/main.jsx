import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { fetchProducts, setCategories } from './features/Product/ProductSlice.js'

const root = createRoot(document.getElementById('root'));

async function initializeApp() {
  await store.dispatch(fetchProducts());
  await store.dispatch(setCategories());
  root.render(
    <StrictMode>

      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>

    </StrictMode>,
  )
}
initializeApp();

