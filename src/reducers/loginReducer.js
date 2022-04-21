import { types } from '../types/types';

export const loginReducer = (state={}, action ) => {
  switch (action.type) {
      case types.login:
          return{
              id:action.payload.id,
              name:action.payload.name,
              login:true              
          }
          
          case types.logout:
              return{
                  login:false                 
              }
          
  
      default:
          return state
  }
  
}
