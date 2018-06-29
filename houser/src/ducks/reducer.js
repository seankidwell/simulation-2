const initialState ={
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  image: '',
  mortgage: '',
  rent: ''
}

export default function reduce(state=initialState, action) {
  switch (action.type) {
    default: return state;
  }
}