/**
 * 引入createStore保存数据源
 */

import { createStore } from 'redux';
import reducer from  './../reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'     //该调试工具需要redux降级到3.7可使用
export default()=>createStore(reducer)