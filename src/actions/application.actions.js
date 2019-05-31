// @flow
import { getDispatch } from '../reduxStore'
import { type Application, Summary, SummaryItem } from '../types'

export const FILTER_APPLICATION_LOADING = 'FILTER_APPLICATION_LOADING'
export const FILTER_APPLICATION = 'FILTER_APPLICATION'
export const FILTER_APPLICATION_RESULTS = 'FILTER_APPLICATION_RESULTS'
export const FILTER_APPLICATION_SUMMARY = 'FILTER_APPLICATION_SUMMARY'
export const FILTER_APPLICATION_SUMMARY_LOADING = 'FILTER_APPLICATION_SUMMARY_LOADING'
export const FILTER_APPLICATION_SUMMARY_RESULTS = 'FILTER_APPLICATION_SUMMARY_RESULTS'
export const APPLICATION_LIST_BY_TYPE = 'APPLICATION_LIST_BY_TYPE'
export const APPLICATION_LIST_NAVIGATE = 'APPLICATION_LIST_NAVIGATE'

const filterApplicationLoading = () => ({
  type: FILTER_APPLICATION_LOADING,
  payload: {}
});

const filterApplication = () => (
  getDispatch()({
    type: FILTER_APPLICATION,
    payload: {
      serviceType: 'All',
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

/* Summary Info Applications */

const filterApplicationSummary = () => (
  getDispatch()({
    type: FILTER_APPLICATION_SUMMARY,
    payload: {
      serviceType: 'All',
      time: 'TODAY'
    }
  })
)

const filterApplicationSummaryLoading = () => ({
  type: FILTER_APPLICATION_SUMMARY_LOADING,
  payload: {}
});

const filterApplicationSummaryResults = (summary: Summary) => (
  getDispatch()({
    type: FILTER_APPLICATION_SUMMARY_RESULTS,
    payload: {
      summary
    }
  })
)

const applicationListByType = (data) => {
  getDispatch()({
    type: APPLICATION_LIST_BY_TYPE,
    payload: {
      data
    }
  })
}

const navigateApplicationList = (data: SummaryItem) => {
  getDispatch()({
    type: APPLICATION_LIST_NAVIGATE,
    payload: {
      data
    }
  })
}

export default {
  filterApplicationLoading,
  filterApplication,
  filterApplicationResults,
  filterApplicationSummary,
  filterApplicationSummaryLoading,
  filterApplicationSummaryResults,
  applicationListByType,
  navigateApplicationList
}
