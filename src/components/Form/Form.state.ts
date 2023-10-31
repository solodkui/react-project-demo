// * Base
import REGEX from '../../helpers/regex';

// * Initial state
const initialState = () => {
  return {
    values: {
      name: {
        isValid: false,
        touched: false,
        value: '',
        error: '',
      },
      email: {
        isValid: false,
        touched: false,
        value: '',
        error: '',
      },
      phone: {
        isValid: false,
        touched: false,
        value: '+380',
        error: '',
      },
    },
    isFormReadyToSubmit: false,
  };
};

export const INITIAL_STATE = initialState();

// * Types
type TState = typeof INITIAL_STATE;

export type TValues = keyof typeof INITIAL_STATE.values;

export enum EType {
  SET_VALUE = 'setValues',
  SUBMIT = 'submit',
  RESET = 'reset',
}

type TAction = {
  payload?: TActionPayload;
  type: EType;
};

type TActionPayload = {
  value: string;
  name: TValues;
};

// * Reducer
export function reducer(state: TState, action: TAction) {
  switch (action.type) {
    case EType.RESET: {
      return {
        ...initialState(),
      };
    }
    case EType.SET_VALUE: {
      let value = action.payload!.value;

      let valid: boolean = false,
        error: string = '';

      if (action.payload?.name === 'phone') {
        value = '+' + value.replace(/[^0-9]/g, '').slice(0, 12);

        valid = REGEX.phone.test(value);

        if (!valid) {
          error = 'Номер телефону невірний';
        }
      } else if (action.payload?.name === 'email') {
        valid = REGEX.email.test(value);

        if (!valid) {
          error = 'Емейл невірний';
        }
      } else {
        valid = !!value.length;

        if (!valid) {
          error = 'Поле не може бути пустим';
        }
      }

      return {
        ...state,
        values: {
          ...state.values,
          [action.payload!.name]: {
            touched: true,
            value,
            error,
            valid,
          },
        },

        isFormReadyToSubmit: Object.values(state.values).every((item) => !item.isValid),
      };
    }
    case EType.SUBMIT: {
      // TODO Fetch data to server
      return {
        ...initialState(),
      };
    }
    default: {
      throw Error(`Unknown action: ${action.type}}`);
    }
  }
}
