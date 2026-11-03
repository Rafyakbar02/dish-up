import { render } from 'preact'
import './index.css'
import { App } from './app.tsx'
import { AppProvider } from './data/app.tsx'

render(
    <AppProvider>
        <App />
    </AppProvider>,
    document.getElementById('app')!
)
