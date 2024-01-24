export interface GoalState {
  goalList: any[];
}

const initialState: GoalState = {
  goalList: [],
};

const goalReducer = (state: GoalState = initialState, action: any) => {
  switch (action.type) {
    case 'CREATE':
      state = {
        ...state,
        goalList: [
          ...state.goalList,
          {
            id: Date.now(),
            text: action.payload.text,
            isCompleted: false,
          },
        ],
      };
      break;
    case 'DELETE':
      state = {
        ...state,
        goalList: state.goalList.filter(eg => eg.id !== action.payload.id),
      };
      break;
    case 'UPDATE':
      state = {
        ...state,
        goalList: [
          ...state.goalList.filter(eg => eg.id !== action.payload.id),
          action.payload,
        ],
      };
  }

  return state;
};

export default goalReducer;
