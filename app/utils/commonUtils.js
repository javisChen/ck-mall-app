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
}

const commonUtils = new CommonUtils();
export default commonUtils