import '../styles/globals.css'
import {Provider} from 'react-redux';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import store from '../store';
import withRedux from 'next-redux-wrapper';
import App, { AppInitialProps } from 'next/app'
import wrapper from '../store';

class MyApp extends App {

  static async getInitialProps({ Component, ctx}) {
    const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}
    
    return { pageProps }

  }

  render() {
    const { Component, pageProps} = this.props
    return (
      <Component {...pageProps} />     
    )
  }
}

export default wrapper.withRedux(MyApp);

// const makeStore = () => store;


// export default withRedux(makeStore)(MyApp);






// function MyApp({ Component, pageProps }) {
  
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
  
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await axios.get("https://simple-blog-api.crew.red/posts/")
//   const data = await res.data
//   console.log(data)

//   return {
//       props: {
//           data
//       }
//   }
// }

// const makeStore = () => store;

// export default withRedux(makeStore)(MyApp);
