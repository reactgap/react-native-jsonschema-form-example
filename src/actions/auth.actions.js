// @flow
import { getDispatch } from '../reduxStore'

const sendPhoneVerificationCode = (code: String) => {
  const dispatch = getDispatch()
  dispatch({
    type: 'AUTH_STATE_CHANGED',
    payload: {
      login: false
    }
  })
}

const loginWithPhoneNumber = (verificationId: String, code: String) => {
  const dispatch = getDispatch()
  dispatch({
    type: 'AUTH_STATE_CHANGED',
    payload: {
      login: true
    }
  })
  console.log('loginWithPhoneNumber')
}


export default {
  sendPhoneVerificationCode,
  loginWithPhoneNumber
}
