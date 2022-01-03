import { useEffect, useState } from "react";
import {updateProfile, signInWithPopup, GoogleAuthProvider , getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut ,onAuthStateChanged} from "firebase/auth";
import InitializationApp from '../../../FirebaseSetup/Firebaseinit';
import Swal from "sweetalert2";

InitializationApp()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [regerror, setRegerror] = useState('');
    const [logerror, setLogerror] = useState('')
    const auth = getAuth();
    const [isloading, setIsloading] = useState(true);
    const googleprovider = new GoogleAuthProvider();


    //Register user 
    const RegisterUser = (email, password, name, navigate) => {
        setIsloading(true)

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
            SaveUser(email, name);
            //updating user to firebase
            updateProfile(auth.currentUser, {
                displayName: name, 
              }).then(() => {

              }).catch((error) => {
         
              });
        })
        .catch((error) => {
            setRegerror(error.message)
        }).finally(() => setIsloading(false));
      }
    
    //login user
    const LoginUser = (email, password,navigate, location) => {
       fetch(`https://sheltered-beyond-34155.herokuapp.com/rolecheck?email=${email}`)
       .then(res => res.json())
       .then(data => {
        setIsloading(true)
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setLogerror('')
                if(data.role === 'admin')
                {
                    const destination = location?.state?.from || '/dashboard';
                    navigate(destination)
                }
                else{
                    const destination = location?.state?.from || '/';
                    navigate(destination)
                }
            })
            .catch((error) => {
                setLogerror(error.message)
            })
       })
    }

    const GoogleSignIn = (navigate) => {
        signInWithPopup(auth, googleprovider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            navigate('/')
        }).catch((error) => {
                console.log(error.message)
        });
    }

    //currently sign in user
    useEffect(() => {
        setIsloading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setUser(user)
            } else {
              
            }
            setIsloading(false)
          });
    },[auth]);

    //LogOut User 
    const LogOutUser = (navigate) => {
        setIsloading(true)
        signOut(auth).then(() => {
            setUser({})
            navigate('/login')
          }).catch((error) => {
            // An error happened.
          }).finally(() => setIsloading(false));
    }

    //save user to database
    const SaveUser = (email, name) =>{
        const user = {email, name}
        fetch('https://sheltered-beyond-34155.herokuapp.com/saveuser', {
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
        SaveUser,
        isloading,
        GoogleSignIn
    }
};

export default useFirebase;