import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Head from 'next/head';
import Layout from '../layout/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>CartAny</title>
                <link rel="shortcut icon" href="/Cartanyorangecrop.png" type="image/x-icon" />
                <meta name="description" content="CartAny | Bringing the art into the Cart | A E-Commerce site for online shoping" />
                <meta name="keywords" content="online-shoping cartany ecommerce cart-your-product" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="google-site-verification" content="wOxpzwAmfE_PQcXsJoKNSrzG6ALvBzXFwlqbOhbIDKw" />
            </Head>

            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </>
    );
}



export default MyApp;
