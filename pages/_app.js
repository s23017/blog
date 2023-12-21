import '@/styles/globals.css'
import Layout from 'components/layout'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//  return <Component {...pageProps} />
// }
