import { create } from 'zustand';

const useUserStore = create((set) => ({
	id: null,
	name: "user",
	sname: "user",
	photo: "",
	level: "none",
	exp: 0,
	wiseCoins: 0,

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