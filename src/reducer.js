export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE after development
   // token:
    //'BQAQ3BSvp8jOZXwF_VT0ynL-J05llx5qk8Hju8ox_6KK702WwG0VG5jxQES3uE6Sgxa7JDCanj7fNRM0Tj_kE5R08jjEDyyHA2W-zwp45vHWBT4o55oYdcCVwKI3AqfLrjCyzQdXQe8EATpta5gj8RLVY-xv9x6sh--l3VTNT611jvwQ62wajA-HfJGCDNkf-qANbUE8S4e1FU2nTOJefg'
  };
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };

      case "SET_PLAYLISTS":
        return {
          ...state,
            playlists: action.playlists,
          };
      default:
        return state;
    }
  };
  
  export default reducer;