import axios from "axios";

export function getajax(url, that, params) {
  return axios.get(url, {
    params,
    cancelToken: new axios.CancelToken(function executor(c) {
      // 设置 cancel token
      that.source = c;
    })
  });
}
