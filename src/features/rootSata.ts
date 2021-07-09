import { all, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
function* log(action: PayloadAction) {
    console.log(action);
}

function* coutingSata() {
    console.log("coutingSata");
    yield takeEvery("*", log);
    
}

function* rinchanSaga() {
    console.log("rinchanSaga");
    
}

export default function* rootSata() {
    console.log("rootSata");
    yield all([rinchanSaga(), coutingSata()])
}

