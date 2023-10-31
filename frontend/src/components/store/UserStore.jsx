import { create } from 'zustand';

const useUserStore = create((set) => ({
	id: null,
	name: "",
	sname: "",
	photo: "",
	level: "",
	exp: null,
	wiseCoins: null,

	login: (user) => set({
		id: user.id,
		name: user.name,
		sname: user.sname,
		photo: user.photo,
		level: user.level,
		exp: user.exp,
		wiseCoins: user.wiseCoins,
	}),
})); 

export default useUserStore