export default function(state = null, action) {
    switch (action.type) {
      case "CV_SELECTED":
        return action.payload;
      default:
        return state;
    }
  }