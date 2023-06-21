import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const login = createAsyncThunk("loginAction", async (obj) => {
  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApFodzkRzeEzYDMgjbTU4Ubeozh9bz-SY",
    {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
});

export const signup = createAsyncThunk("signupAction", async (obj) => {
  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApFodzkRzeEzYDMgjbTU4Ubeozh9bz-SY",
    {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
});

export const createNewUser = createAsyncThunk( "newUser" , async(obj)=>{
  // const response = await fetch( "https://social-media-f01ab-default-rtdb.firebaseio.com/users.json" , {
  //   method : 'POST',
  //   body : JSON.stringify(obj),
  //   headers : {
  //     'Content-Type' : 'application/json',
  //   },
  // });
  const response = await fetch("https://social-media-f01ab-default-rtdb.firebaseio.com/users.json")
  const data = await response.json();
  return data ;
})



const appSlice = createSlice({
  name: "AppSlice",
  initialState: {
    initialLoading: {
      user: null,
      loginStatus: false,
      token: null,
      error: null,
    },
    users: [
      {
        userEmail : null ,
        profile: { name: null, imgURL: null, email: null },
        posts: [{ media: null, content: null, likes: 0 },],
        friends: [],
      },
    ],
  },
  reducers: {
    initialRender: (state, action) => {
      const isUser = localStorage.getItem("user");
      const userToken = localStorage.getItem("token");
      if (isUser) {
        return {
          ...state,
          initialLoading: {
            user: isUser,
            loginStatus: true,
            token: userToken,
            error: null,
          },
        };
      } else {
        return state;
      }
    },
    logout: (state, action) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        ...state,
        initialLoading: {
          user: null,
          loginStatus: false,
          token: null,
          error: null,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.error) {
        console.log(action.payload.error);
        return {
          ...state,
          initialLoading: {
            user: null,
            loginStatus: false,
            token: null,
            error: action.payload.error.message,
          },
        };
      } else if (action.payload.idToken) {
        let Email = action.payload.email;
        let newEmail = Email.replaceAll(".", "");
        localStorage.setItem("user", newEmail);
        localStorage.setItem("token", action.payload.idToken);

        console.log(action.payload);
        return {
          ...state,
          initialLoading: {
            user: action.payload.email,
            loginStatus: true,
            error: null,
            token: action.payload.idToken,
          },
        };
      }
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      if (action.payload.error) {
        console.log(action.payload.error);
        return {
          ...state,
          initialLoading: {
            user: null,
            loginStatus: false,
            token: null,
            error: action.payload.error.message,
          },
        };
      } else if (action.payload.idToken) {
        let Email = action.payload.email;
        let newEmail = Email.replaceAll(".", "");
        localStorage.setItem("user", newEmail);
        localStorage.setItem("token", action.payload.idToken);
        console.log(action.payload);
        return {
          ...state,
          initialLoading: {
            user: action.payload.email,
            loginStatus: true,
            error: null,
            token: action.payload.idToken,
          },
        };
      }
    });
    builder.addCase(createNewUser.fulfilled , (state , action)=>{
      console.log(action.payload);
    });
  },
});
export const { initialRender, logout } = appSlice.actions;
export default appSlice.reducer;
