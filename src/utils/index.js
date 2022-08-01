import dayjs from 'dayjs'
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')

export function FromNow(data) {
  return (  dayjs(data).fromNow());
}
