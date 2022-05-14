import { createContext, Dispatch, useContext, useReducer } from 'react';

type PopUpState = {
  isOpen: boolean;
};

const PopUpStateContext = createContext<PopUpState | undefined>(undefined);

type Action = { type: 'TOGGLE_POP_UP' };

type PopUpDispatch = Dispatch<Action>;

const PopUpDispatchContext = createContext<PopUpDispatch | undefined>(undefined);

const popUpReducer = (state: PopUpState, action: Action): PopUpState => {
  switch (action.type) {
    case 'TOGGLE_POP_UP':
      return { ...state, isOpen: !state.isOpen };
    default:
      throw new Error('Unhandled action');
  }
};

interface IProps {
  children: React.ReactNode;
}

export const PopUpContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(popUpReducer, {
    isOpen: false,
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
