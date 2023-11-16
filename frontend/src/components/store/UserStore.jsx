import { create } from 'zustand';

const useUserStore = create((set) => ({
	id: null,
	name: "user",
	sname: "user",
	photo: null,
	level: "none",
	exp: 0,
	wiseCoins: 0,
	userToken: null,
	session: false,

	login: (user, token) => set({
		name: user.name,
		sname: user.sname,
		photo: user.photo,
		level: user.level,
		exp: user.exp,
		wiseCoins: user.wiseCoins,
		userToken: token,
		session: true,
	}),
	logout: () => set({
		name: "user",
		sname: "user",
		photo: null,
		level: "none",
		exp: 0,
		wiseCoins: 0,
		userToken: null,
		session: false,
	}),
	changePhoto: (newPhoto) => ({ photo: newPhoto }),
	refreshCoins: (newBalance) => ({ wiseCoins: newBalance }),
})); 

export default useUserStore