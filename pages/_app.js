import Layout from 'components/layout'

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
