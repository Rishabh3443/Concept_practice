import { createSlice } from "@reduxjs/toolkit";

const createSlice = createSlice({
    name:"search",
    initialStage:{
        query:"",
        activeTab:"photos",
        results:[],
        loading: false,
        error: null,
    },
   reducers: {
        setQuery(state,action){
            state.query=action.payload
        },
        setActiveTab(state,action){
            state.actionTab = action.payload

        },
        setResults(state,action){
            state.results = action.payload
            state.loading = false
        },
        setLoading(state,action){
            
            state.loading = true
            state.error = false
        },
        setError(state,action){
            state.error = action.payload
            state.loading = false
        },
         clearResults(state) {
            state.results = []
        }
    }
})

export const {
    setQuery,
    setActiveTabs,
    setError,
    setLoading,
    setResults,
    clearResults
} = searchSlice.actions


export default searchSlice.reducer;