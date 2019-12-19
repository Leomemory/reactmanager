import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

export default class Axios {
    /* 封装jsonp,用于头部header组件获取天气API */
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    /* mock处理，axios封装，loading处理错误拦截 */
    static ajax(options){
        let loading;
        if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseAPI = 'https://www.fastmock.site/mock/ce29bb83c963fa87cee6e5a43b893368/rest';
        return new Promise((resolve,reject)=>{
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseAPI,
                timeout: 5000,
                params:  (options.data && options.data.params) || ''
            }).then((response)=>{
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if(response.status == '200'){
                    let res = response.data;
                    if(res.code == '0'){
                        resolve(res)
                    }else{
                        Modal.info({
                            title:"提示",
                            content:res.msg
                        })
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }
}