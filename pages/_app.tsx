import '../styles/globals.css'
import React, {FC} from 'react';
import {AppProps} from 'next/app';
import wrapper from '../store';

// class MyApp extends App {

//   static async getInitialProps({ Component, ctx}) {
//     const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {}
    
//     return { pageProps }

//   }

//   render() {
//     const { Component, pageProps} = this.props
//     return (
//       <Component {...pageProps} />     
//     )
//   }
// }

// export default wrapper.withRedux(MyApp);


const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);