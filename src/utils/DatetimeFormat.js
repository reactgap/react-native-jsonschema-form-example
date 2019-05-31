
import moment from "moment"
import getDeviceLanguage from './getDeviceLanguage'

const dateMonthYear = "YYYY-MM-DDTHH:mm:ssZ"

export const dateFormatToString = (time) => {
  console.log('dateFormatToString',time)
  moment.locale(getDeviceLanguage())
  const date = moment.utc(time, dateMonthYear)
  if (date.isValid) {
    return date.format('DD-MM-YYYY')
  }
  return time
}