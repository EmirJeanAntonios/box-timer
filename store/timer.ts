import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

interface TimerState {
  workoutPerRound: number;
  restPerRound: number;
  round: number;
  setWorkoutPerRound: (by: number) => void;
  setRestPerRound: (by: number) => void;
  setRound: (by: number) => void;
}

export const useTimerStore = create<TimerState>()(set => ({
  workoutPerRound: 10,
  restPerRound: 10,
  round: 1,
  setWorkoutPerRound: by =>
    set(state => ({workoutPerRound: state.workoutPerRound + by})),
  setRestPerRound: by =>
    set(state => ({restPerRound: state.restPerRound + by})),
  setRound: by => set(state => ({round: state.round + by})),
}));
