import { Base } from '../../utils/base.js';
class Detail extends Base {
  constructor() {
    super()
  }
  //获取goods
  getDetail(id, callBack) {
    let parames = {
      url: `/detail/${id}`,
      scallBack: (res) => {
        callBack && callBack(res.data)
      }
    }
    this.request(parames)
  }
}
export { Detail }