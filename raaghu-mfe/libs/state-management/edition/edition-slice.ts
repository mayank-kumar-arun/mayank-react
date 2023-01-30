import { createSlice, createAsyncThunk, PayloadAction, AsyncThunkAction } from "@reduxjs/toolkit";
import { EditionServiceProxy , ListResultDtoOfEditionListDto } from "../../shared/service-proxies";
import axios from 'axios'
// import { edition } from "./edition.models"


type InitialState = {
  loading : boolean,
  users : ListResultDtoOfEditionListDto[],
  error : string
}

const initialState : InitialState = {
  loading : false,
  users : [],
  error : ""
}
const getEdition =  new EditionServiceProxy();
console.log(getEdition)

export const EditionUser = createAsyncThunk('Edition/AddUser', async () => {
  console.log("hi from slice")
   const result = await getEdition.getEditions();
   return result
              
})

const editionSlice = createSlice({
  name: 'edition',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(EditionUser.pending, (state) => {
      state.loading = true
    });
    builder.addCase(EditionUser.fulfilled, (state , action : PayloadAction<ListResultDtoOfEditionListDto>) =>{
      state.loading = false
      // state.users = action=
      state.error = ''
    });
    builder.addCase(EditionUser.rejected, (state , action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message || 'Something Went Wrong'
    })
  },
})

export default editionSlice.reducer