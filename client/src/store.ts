import { createStore } from 'vuex'
import { Cycle } from './code/cycle/Cycle';

// Create a new store instance.

const store = createStore({
    state () {
      return {
        selectedPeoplePopin: 1,
        openedEvent: {id: -1, event: {}},
      }
    },
    getters: {
        getCycle (state: any) {
            return state.cycleObject
        }
    },
    mutations: {
      setAmountPeoplePopin(state: any, amount: number) {
        state.selectedPeoplePopin = amount
      },
      openEvent(state: any, event: {}) {
        state.openedEvent = event;
      }
    }
  })
  
export default store;