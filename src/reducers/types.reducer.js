
import { HomeInfo, Action, Product, HomeInfoView } from '../types'

export type HomeState = {
  homeInfo: HomeInfoView,
  isLoading: boolean,
  product: Product
}


export type ReduxState = {
  home: HomeState
}