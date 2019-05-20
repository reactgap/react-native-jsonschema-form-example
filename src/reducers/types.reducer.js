
import { HomeInfo, Action, Product, HomeInfoView, Application } from '../types'

export type HomeState = {
  homeInfo: HomeInfoView,
  isLoading: boolean,
  product: Product
}

export type ApplicationState = {
  applications: Application[],
  isLoading: Boolean,
  summary: Summary
};

export type ReduxState = {
  home: HomeState,
  application: ApplicationState
}