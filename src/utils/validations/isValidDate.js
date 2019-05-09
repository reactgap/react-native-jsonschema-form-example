// @flow

const isValidDate = (year: number, month: number, date: number, hour: number, min: number) => {
  if (
    year < 1000
    || year > 3000
    || month < 0
    || month >= 12
    || hour >= 24
    || hour < 0
    || min >= 60
    || min < 0
  ) {
    return false
  }

  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // Adjust for leap years
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthLength[1] = 29
  }

  return date > 0 && date <= monthLength[month]
}

export default isValidDate
