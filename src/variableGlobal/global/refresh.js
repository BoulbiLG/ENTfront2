import create from 'zustand';

const refreshStore = create((set) => ({
  refresh: false,
  setRefresh: (value) => set({ refresh: value }),
}));

export default refreshStore;
