import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/UserStore';

function Loader() {
	const navigate = useNavigate();
	const session = useUserStore(state => state.session);
	const login = useUserStore(state => state.login);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		console.log(checked, session)
		async function checkSession() {
			const response = await fetch('http://localhost:3000/auth/refresh', {
				method: 'POST',
				credentials: 'include'
			});

			if (response) {
				const data = await response.json();

				if (data.success) {
					login(data.userData, data.userToken);
					navigate('/home');

				} else {
					setChecked(true);
					navigate('/');
					
				}
				setChecked(true);
				return
			}
		}

		checkSession();
	}, []);

	return (
		<div className={ checked || session ? 'd-none' : 'd-block bg-secondary w-100 h-100 position-fixed z-2'}>
			<span className="spinner-border position-relative text-light" style={{top: '50%', left:'50%'}}></span>
		</div>
	);
	
}

export default Loader