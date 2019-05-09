// import { Platform } from 'react-native';
// import {take, call, put, fork, race, takeEvery, takeLatest} from 'redux-saga/effects';
// import { ActionTypes, NewProductPayload, Location } from '../types';
// import { loginWithSocialsSucess, loginWithSocialsFailed } from '../actions/authActions';
// import { productApi } from '../helper/api/api';
// import { validateFormData } from '../helper/ultils';
// import { 
//     savingProductAction, saveProductFailed, saveProductSucessAction
// } from '../actions/NewProductAction';
// import { isEmpty } from 'lodash';

// requestNewProduct = (data) => {
//     return productApi.newProduct(data);
// }
// function* handleSaveProduct(action){
//     console.log('handleSaveProduct',action);
//     yield put(savingProductAction());
//     const { name, description, images, location } = action.payload || {};
//     const tags = [];
//     const formError = validateFormData( name, description, images, location) || {};
//     if(!formError || isEmpty(formError)) {
//         // yield put(saveProductSucessAction());
//         const res = yield requestNewProduct({
//              name, description, images,location, tags
//         });

//         if(res != null) {
//             const { _id, name, description, location, imageUrls, tags } = res;
//             yield put(saveProductSucessAction({_id, name, description, location, imageUrls, tags, images}));
//         }
        
//     }else {
//         yield put(saveProductFailed(formError));
//     }
    
// }

// export default function* rootSaga() {
//     yield  takeLatest(ActionTypes.NewProduct.SAVE_PRODUCT, handleSaveProduct);
// }
