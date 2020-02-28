/**
 * 对数组进行分组
 * @param array 数组
 * @param name 需要分组的属性
 * @returns {*[]}
 */
class CommonUtils {

  groupBy(array, name) {
    const groups = {}
    array.forEach(o => {
      let group = o[name]
      if (!group || group == undefined || group == 'undefined') {
        group = '核心参数'
      }
      groups[group] = groups[group] || []
      groups[group].push(o)
    })
    return groups;
    // return Object.keys(groups).map(group => groups[group])
  }

  centToYuan(cent) {
    var num = cent;
    num = cent * 0.01;
    num += '';
    var reg = num.indexOf('.') > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
    num = toDecimal2(num.replace(reg, '$1'));
    return num
  }
}

const commonUtils = new CommonUtils();
export default commonUtils