// @flow
import { REHYDRATE } from 'redux-persist'
import { Action, Application, Summary } from '../types'
import { ApplicationState } from './types.reducer'
import { 
  FILTER_APPLICATION_LOADING,
  FILTER_APPLICATION,
  FILTER_APPLICATION_RESULTS,
  FILTER_APPLICATION_SUMMARY,
  FILTER_APPLICATION_SUMMARY_LOADING,
  FILTER_APPLICATION_SUMMARY_RESULTS
} from '../actions/application.actions'

const INIT_STATE: ApplicationState = {
    applications: null,
    isLoading: false,
    summary: null
};

const reducer = (state: ApplicationState = INIT_STATE, action: Action): ApplicationState => {
    console.log('action',action)
    switch (action.type) {
        case REHYDRATE: {
            return { ...INIT_STATE }
        }
        case FILTER_APPLICATION_LOADING || FILTER_APPLICATION_SUMMARY_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case FILTER_APPLICATION_RESULTS: {
            const { applications } = action.payload
            return {
                ...state,
                applications,
                isLoading: false
            }
        }
        case FILTER_APPLICATION_SUMMARY_RESULTS: {
            const { summary } = action.payload
            return {
                ...state,
                summary,
                isLoading: false
            }
        }
        default:
            return state
    }
};

export default reducer
