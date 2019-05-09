// @flow
import { REHYDRATE } from 'redux-persist'
import { Action, Application } from '../types'
import { 
  FILTER_APPLICATION_LOADING,
  FILTER_APPLICATION,
  FILTER_APPLICATION_RESULTS
} from '../actions/application.actions'

type ApplicationState = {
   applications: Application[],
   isLoading: Boolean
};

const INIT_STATE: ApplicationState = {
    applications: null,
    isLoading: false,
};

const reducer = (state: ApplicationState = INIT_STATE, action: Action): ApplicationState => {
    console.log('action',action)
    switch (action.type) {
        case REHYDRATE: {
            return { ...INIT_STATE }
        }
        case FILTER_APPLICATION_LOADING: {
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
        default:
            return state
    }
};

export default reducer
