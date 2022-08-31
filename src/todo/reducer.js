import {ADD_JOB, DELETE_JOB, SET_JOB} from "./constants";

export const initState = {
   job: '',
   jobs: []
}

const reducer = (state, action) => {
   /*   switch (action) {
         case UP_ACTION:
            return state + 1;
         case DOWN_ACTION:
            return state - 1;
         default:
            throw new Error('Invalid action');
      }*/
   switch (action.type) {
      case SET_JOB :
         return {
            ...state,
            job: action.payLoad
         }

      case ADD_JOB :
         return {
            ...state,
            jobs: [
               ...state.jobs,
               action.payLoad
            ]
         }

      case DELETE_JOB :
         const newJobs = [...state.jobs]
         newJobs.splice(action.payLoad, 1)
         return {
            ...state,
            jobs: newJobs
         }
      default:
         throw new Error('Invalid action')

   }
}
export default reducer