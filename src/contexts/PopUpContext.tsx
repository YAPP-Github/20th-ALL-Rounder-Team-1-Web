import { createContext, Dispatch, useContext, useReducer } from 'react';

type PopUpState = {
  isFindPasswordOpen: boolean;
  isCalendarOpen: boolean;
};
type PopUpDispatch = Dispatch<Action>;

type Action = { type: 'TOGGLE_FIND_PASSWORD_POP_UP' } | { type: 'TOGGLE_CALENDAR_POP_UP' };

const PopUpStateContext = createContext<PopUpState>({} as PopUpState);
const PopUpDispatchContext = createContext<PopUpDispatch>({} as PopUpDispatch);

const popUpReducer = (state: PopUpState, action: Action): PopUpState => {
  switch (action.type) {
    case 'TOGGLE_FIND_PASSWORD_POP_UP':
      return { ...state, isFindPasswordOpen: !state.isFindPasswordOpen };
    case 'TOGGLE_CALENDAR_POP_UP':
      return { ...state, isCalendarOpen: !state.isCalendarOpen };
    default:
      throw new Error('Unhandled action');
  }
};

interface IProps {
  children: React.ReactNode;
}

export const PopUpContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(popUpReducer, {
    isFindPasswordOpen: false,
    isCalendarOpen: false,
  });

  return (
    <PopUpStateContext.Provider value={state}>
      <PopUpDispatchContext.Provider value={dispatch}>{children}</PopUpDispatchContext.Provider>
    </PopUpStateContext.Provider>
  );
};

export const usePopUpState = () => {
  const state = useContext(PopUpStateContext);

  if (!state) {
    throw new Error('Cannot find PopUpStateContext');
  }

  return state;
};

export const usePopUpDispatch = () => {
  const dispatch = useContext(PopUpDispatchContext);

  if (!dispatch) {
    throw new Error('Cannot find PopUpDispatchContext');
  }

  return dispatch;
};
