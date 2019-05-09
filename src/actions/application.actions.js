// @flow
import { getDispatch } from '../reduxStore'
import { type Application } from '../types'

export const FILTER_APPLICATION_LOADING = 'FILTER_APPLICATION_LOADING'
export const FILTER_APPLICATION = 'FILTER_APPLICATION'
export const FILTER_APPLICATION_RESULTS = 'FILTER_APPLICATION_RESULTS'

const filterApplicationLoading = () => ({
  type: FILTER_APPLICATION_LOADING,
  payload: {}
});

const filterApplication = () => (
  getDispatch()({
    type: FILTER_APPLICATION,
    payload: {
      serviceType: 'VTC',
      time: 'TODAY'
    }
  })
)


const filterApplicationResults = (applications: Application[]) => (
  getDispatch()({
    type: FILTER_APPLICATION_RESULTS,
    payload: {
      applications
    }
  })
)

export default {
  filterApplicationLoading,
  filterApplication,
  filterApplicationResults
}
