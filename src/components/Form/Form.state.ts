export const INITIAL__STATE = {
  values: {
    name: {
      isValid: false,
      value: '',
    },
    email: {
      isValid: false,
      value: '',
    },
    phone: {
      isValid: false,
      value: '',
    },
  },
  isFormReadyToSubmit: false,
};

type TState = {
  age: number;
};

function reducer(state: TState, action: { type: string }) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1,
    };
  }
  throw Error('Unknown action.');
}

export default reducer;
