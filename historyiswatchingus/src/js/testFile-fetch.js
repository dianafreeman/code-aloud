
​
function requestReps(StateCode) {
  return {
    type: REQUEST_REPS,
    payload: StateCode
  }
}
​
function receiveReps(json) {
  return {
    type: RECEIVE_REPS,
    payload: json
  }
}
​
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))
​
export function fetchReps(StateCode) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
​
  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
​
    dispatch(requestReps(StateCode))
​
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
​
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
​
    return getRepresentativesFor(StateCode)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
​
        dispatch(receiveReps(json))
      )
  }
}