import {setUser,logout,selectUser} from './userSlice';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';
function Login() {
    const dispatch=useDispatch();
    const user=useSelector(selectUser);

    console.log(user);
    const logintoApp=()=>{
        dispatch(setUser({user:'DDS'}))
    }
    return (
        <div>
            <h1>Login component</h1>
            {user.user?<h2>user is {user.user}</h2>:<h2>nobody is signed in</h2>}
            <button onClick={logintoApp}>Login</button>
            <button onClick={()=>dispatch(logout())}>Logout</button>
        </div>
    )
}

export default Login
