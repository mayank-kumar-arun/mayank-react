import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
// import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import axios from "axios";
// import {
//   LanguageServiceProxy,
//   GetLanguagesOutput,
// } from "../../shared/service-proxies";

type InitialState = {
  loading: boolean;
  languages: any[];
  error: string;
};
export const initialState: InitialState = {
  loading: false,
  languages: [],
  error: "",
};

// const getLanguage = new LanguageServiceProxy();

// const fetchLanguagesAction = (): AnyAction => ({
//   type: "language/fetchLanguages",
// });

// Generates pending, fulfilled and rejected action types

var credentials = localStorage.getItem("LoginCredential");
if (credentials) {
  var parsedCredentials = JSON.parse(credentials);
}

export const fetchLanguages = createAsyncThunk(
  "language/fetchLanguages",
  () => {
    return axios
      .get(
        "https://anzdemoapi.raaghu.io/api/services/app/Language/GetLanguages",
        {
          headers: {
            Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
          },
        }
      )
      .then((response) =>
        response.data.result.items.map((item: any) => {
          let date = new Date(item.creationTime);
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();

          let currentTime = date.toLocaleString("en-IN", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          });

          let currentDate = `${day}/${month}/${year}, ${currentTime}`;

          return {
            id: item.id,
            languageName: item.displayName,
            code: item.name,
            isenabled: item.isDisabled ? "False" : "True",
            creationTime: currentDate,
          };
        })
      );
    // console.log(
    //   "hello this is new data",
    //   resp.data.result.items.map((item: any) => ({
    //     id: item.id,
    //     languageName: item.languageName,
    //     code: item.name,
    //     isenabled: !item.isDisabled,
    //     creationTime: item.creationTime,
    //   }))
    // );
  }

  // async () => {
  //   console.log("Hi from API via Slice")
  //   const result = await getLanguage.getLanguages();
  //   return result;
  // }
);

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLanguages.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchLanguages.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.languages = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchLanguages.rejected, (state, action) => {
      state.loading = false;
      state.languages = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default languageSlice.reducer;
