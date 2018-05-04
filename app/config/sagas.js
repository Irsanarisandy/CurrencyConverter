import { select, call, put, takeEvery } from 'redux-saga/effects';
import {
    GET_INITIAL_CONVERSION,
    SWAP_CURRENCY,
    CHANGE_BASE_CURRENCY,
    CONVERSION_RESULT,
    CONVERSION_ERROR,
} from '../actions/currencies';

const getLatestRate = currency =>
    fetch(`https://exchangeratesapi.io/api/latest?base=${currency}`);

const fetchLatestConversionRates = function* (action) {
    try {
        let currency = action.currency;

        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        }

        const response = yield call(getLatestRate, currency);
        const result = yield response.json();

        if (result.error) {
            yield put({ type: CONVERSION_ERROR, error: result.error });
        } else {
            yield put({ type: CONVERSION_RESULT, result });
        }
    } catch (error) {
        yield put({ type: CONVERSION_ERROR, error: error.message });
    }
};

const rootSaga = function* () {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;
