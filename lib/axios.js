import axios from 'axios';
import NProgress from 'nprogress';
import {bmobConfig2} from '../lib/config'

axios.defaults.headers['X-Bmob-Application-Id'] = bmobConfig2.applicationId;
axios.defaults.headers['X-Bmob-REST-API-Key'] = bmobConfig2.restApiKey;
axios.defaults.headers['Content-Type'] = 'application/json';
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;

//请求之前
axios.interceptors.request.use((config)=>{
   NProgress.start()
  return config;
});

//
axios.interceptors.response.use(
  response => {
    // console.log('-------axiosResponse---------')
    NProgress.done()
    return response;
  },
  error => {
    // console.log('-------axiosError---------:');
    // console.log(error.response.status==401)
    NProgress.done()
    if(error.response&&error.response.status==401){
      window.location.href="/login";
    }
    return Promise.reject(error);
  }
);

export default axios;

