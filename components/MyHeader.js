import Router from 'next/router';
import Head from 'next/head';
import LeftNav from './Leftnav';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children ,title = 'This is the default title'}) =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>OM系统 - {title}</title>
      {/* <link rel='stylesheet' href='https://cdn.bootcss.com/antd/3.1.3/antd.css' /> */}
      <link rel='stylesheet' href='../static/css/antd.css' />
      <link rel='stylesheet' href='../static/css/common.css' />

    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
    <LeftNav></LeftNav>
    <div className="body">
      {children}
    </div>
  </div>