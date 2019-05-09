// @flow

const isEmpty = (obj: any) => {
  if (obj == null || (typeof obj === 'string' && obj.length === 0)) return true

  return Object.keys(obj).length === 0
}

export default isEmpty
