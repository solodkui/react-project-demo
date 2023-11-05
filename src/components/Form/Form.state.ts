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

export type TValues = typeof INITIAL_STATE.values;
export type TValuesKeys = keyof typeof INITIAL_STATE.values;

export enum EType {
  TOUCHED_ALL = 'touched_all',
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
  name: TValuesKeys;
};

const checkValue = (
  v: Readonly<string>,
  name: Readonly<TValuesKeys>,
): [value: string, isValid: boolean, error: string] => {
  let value = v,
    isValid: boolean = false,
    error: string = '';

  // Clear & better =)
  switch (name) {
    case 'phone': {
      value = '+' + value.replace(/[^0-9]/g, '').slice(0, 12);
      isValid = REGEX.phone.test(value);
      error = !isValid ? 'Номер телефону невірний' : '';
      break;
    }
    case 'email': {
      isValid = REGEX.email.test(value);
      error = !isValid ? 'Емейл невірний' : '';
      break;
    }
    default: {
      isValid = !!value.length;
      error = !isValid ? 'Поле не може бути пустим' : '';
      break;
    }
  }

  return [value, isValid, error];
};

const checkFormReadyToSubmit = (values: Readonly<TValues>) => Object.values(values).every((item) => !item.isValid);

// * Reducer
export function reducer(state: TState, action: TAction) {
  switch (action.type) {
    case EType.RESET: {
      return {
        ...initialState(),
      };
    }
    case EType.SET_VALUE: {
      const [value, isValid, error] = checkValue(action.payload!.value, action.payload!.name);

      return {
        ...state,
        values: {
          ...state.values,
          [action.payload!.name]: {
            ...state.values[action.payload!.name],
            touched: true,
            isValid,
            value,
            error,
          },
        },
        isFormReadyToSubmit: checkFormReadyToSubmit(state.values),
      };
    }
    case EType.TOUCHED_ALL: {
      const values = state.values;

      (Object.keys(state.values) as TValuesKeys[]).forEach((key) => {
        const data = state.values[key],
          [value, isValid, error] = checkValue(data.value, key);

        values[key] = {
          ...data,
          touched: true,
          isValid,
          value,
          error,
        };
      });

      return {
        ...state,
        isFormReadyToSubmit: checkFormReadyToSubmit(values),
        values,
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
