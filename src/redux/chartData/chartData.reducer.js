import { GET_CHART_DATA_ERROR, GET_CHART_DATA_LOADING, GET_CHART_DATA_SUCCESS, GET_TOP_SELLING_ERROR, GET_TOP_SELLING_LOADING, GET_TOP_SELLING_SUCCESS } from "./chartData.actionTypes";

const initialState = {
    chartData: [],
    loading: false,
    error: false,
    topSellingLoading:false,
    topSelling:[],
}

export const chartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CHART_DATA_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }
        case GET_CHART_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                chartData: payload
            }
        }
        case GET_CHART_DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }

        case GET_TOP_SELLING_LOADING: {
            return {
                ...state,
                topSellingLoading: true,
                error: false,
            }
        }
        case GET_TOP_SELLING_SUCCESS: {
            return {
                ...state,
                topSellingLoading: false,
                error: false,
                topSelling: payload
            }
        }
        case GET_TOP_SELLING_ERROR: {
            return {
                ...state,
                topSellingLoading: false,
                error: true,
            }
        }

        default: {
            return initialState;
        }

    }
}