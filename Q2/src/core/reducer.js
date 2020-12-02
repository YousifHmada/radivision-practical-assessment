export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_IMG':
      return { ...state, current: action.value % state.images.length };
    default:
      return state;
  }
}
