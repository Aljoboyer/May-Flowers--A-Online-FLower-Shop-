import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut ,onAuthStateChanged} from "firebase/auth";
import InitializationApp from '../../../FirebaseSetup/Firebaseinit';
import Swal from "sweetalert2";

InitializationApp()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [regerror, setRegerror] = useState('');
    const [logerror, setLogerror] = useState('')
    const auth = getAuth();


    //Register user 
    const RegisterUser = (email, password, name, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            setRegerror('');
            navigate('/');
            Swal.fire(
                'Register Succesfully',
                '',
                'success'
              )
            //saving user to database
            SaveUser(email, name)
        })
        .catch((error) => {
            setRegerror(error.message)
        });
      }
    
    //login user
    const LoginUser = (email, password,navigate) => {
       fetch(`http://localhost:5000/rolecheck?email=${email}`)
       .then(res => res.json())
       .then(data => {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setLogerror('')
                if(data.role === 'admin')
                {
                    navigate('/dashboard')
                }
                else{
                    navigate('/')
                }
            })
            .catch((error) => {
                setLogerror(error.message)
            });
       })
    }

    //currently sign in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setUser(user)
            } else {
              
            }
          });
    },[auth]);

    //LogOut User 
    const LogOutUser = (navigate) => {
        signOut(auth).then(() => {
            setUser({})
            navigate('/login')
          }).catch((error) => {
            // An error happened.
          });
    }

    //save user to database
    const SaveUser = (email, name) =>{
        const user = {email, name}
        fetch('http://localhost:5000/saveuser', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return {
        user,
        setUser,
        RegisterUser,
        LoginUser,
        LogOutUser,
        regerror,
        logerror,
        SaveUser
    }
};

export default useFirebase;