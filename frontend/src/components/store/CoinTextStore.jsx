import { create } from 'zustand';

const useCoinTextStore = create((set) => ({
	coinTexts: [],

	setCoinText: (fetchData) => set({ coinTexts: fetchData })
}));

export default useCoinTextStore