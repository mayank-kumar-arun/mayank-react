import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from 'axios'



type InitialState = {
  loading : boolean,
  users : any[],
  error : string
}

const initialState : InitialState = {
  loading : false,
  users : [],
  error : ""
}

var credentials = localStorage.getItem("LoginCredential");
if (credentials) {
  var parsedCredentials = JSON.parse(credentials);
}

export const EditionUser = createAsyncThunk('Edition/AddUser',  () => {
  return axios.get(
    "https://anzdemoapi.raaghu.io/api/services/app/Edition/GetEditions",
    {
      headers: {
        Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
      },
    }
  ).then((response) => 
     response.data.result.items.map((item: any) => {
        return {
          id: item.id,
					editionName: item.displayName,
					price: item.annualPrice,
					trialPeriod: item.trialDayCount,
					expiringEdition: item.expiringEditionDisplayName,
        }
     }))
              
})

const editionSlice = createSlice({
  name: 'edition',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(EditionUser.pending, (state) => {
      state.loading = true
    });
    builder.addCase(EditionUser.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.users = action.payload
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