import '../styles/globals.css'
import 'antd/dist/antd.css';
import {AppProvider} from '../components/context'
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
