import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.tsx'
// import * as serviceWorker from "./../serviceWorker";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
  // </React.StrictMode>,
)

// serviceWorker.unregister();