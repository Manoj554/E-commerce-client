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
