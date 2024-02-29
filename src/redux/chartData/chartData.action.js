import axios from "axios"
import { GET_CHART_DATA_ERROR, GET_CHART_DATA_LOADING, GET_CHART_DATA_SUCCESS, GET_TOP_SELLING_ERROR, GET_TOP_SELLING_LOADING, GET_TOP_SELLING_SUCCESS } from "./chartData.actionTypes";

export const fetchData = (year) => async (dispatch) => {
    dispatch({ type: GET_CHART_DATA_LOADING })
    try {
        let res = await axios.get(`https://dil-foods.onrender.com/data?year=${year}`);
        dispatch({ type: GET_CHART_DATA_SUCCESS, payload: res?.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_CHART_DATA_ERROR })
    }
}

export const fetchTopSelling = (year) => async (dispatch) => {
    dispatch({ type: GET_TOP_SELLING_LOADING })
    try {
        let res = await axios.get(`https://dil-foods.onrender.com/topSellingProducts?year=${year}`);
        dispatch({ type: GET_TOP_SELLING_SUCCESS, payload: res?.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_TOP_SELLING_ERROR })
    }
}