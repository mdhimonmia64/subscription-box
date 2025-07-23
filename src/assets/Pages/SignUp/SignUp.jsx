import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../RootLayout/RootLayout";
import { toast } from "react-toastify";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";



const SignUp = () => {
  const{handleSignUp,updateUser,setUser} = useContext(AuthContext);
  const [showPassword,setShowPassword] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value


    if(password.length < 6){
      toast.success("Password must be equal or greater than 6");
      return;
    }
    if(password !== confirmPassword){
     toast.error("Password and ConfirmPassword must be same")
      return;
    }
    if(!/[a-z]/.test(password)){
      toast.error("Password must contain at least lower case later");
      return;
    }
    if(!/[A-Z]/.test(password)){
     toast.error("Password must contain at least upper case later");
      return;
    }
    if(!/[@\%\&\$\^\*\#]/.test(password)){
      toast.error("Password must be characters please");
      return;
    }
    if(!/\d/.test(password)){
      toast.error("Password must contain at least one number")
      return;
    }

    handleSignUp(email,password)
    .then((result)=>{
      const user = result.user;
      toast.success("Register Successfully")
      updateUser({displayName:name,photoURL:photo})
      .then(()=>{
        setUser({...user,displayName:name,photoURL:photo})
      })
      .catch((error)=>{
        toast.error(error.message)
      })
      
    })
    .catch((error)=>{
      const errorMessage = error.message;
      toast.error(errorMessage)
    })

  }

  return (
    <div className=" py-20">
    <div className="card bg-[url('./imge-1.jpg')] w-full mx-auto max-w-md shrink-0 shadow-2xl ">
      <div className="card-body mx-auto">
        <h1 className="text-4xl font-semibold text-center text-white">Register your account</h1>
        <p className="text-center text-white">Register a new account </p>
        <form onSubmit={handleSubmit} className="fieldset">
            {/* name */}
          <label className="label text-white">Name</label>
          <input type="text" name="name" className="input" placeholder="Your Name" required/>
          {/* photo url */}
          <label className="label text-white">Photo url</label>
          <input type="text" name="photo" className="input" placeholder="photo" required/>
          {/* email */}
          <label className="label text-white">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" required/>
          {/* password */}
          <label className="label text-white">Password</label>
          <div className="relative">
            <input type={showPassword?"text":"password"} name="password" className="input " placeholder="Password" required/>
            <button 
            onClick={()=>setShowPassword(!showPassword)}
            className="btn btn-xs absolute right-9 top-2">{showPassword?<IoMdEye size={22}/>:<IoMdEyeOff size={22}/>}
            </button>
          </div>
          {/* conform password */}
          <label className="label text-white">Confirm-Password</label>
          <input type="password" name="confirmPassword" className="input" placeholder="Confirm-Password" required/>
          <button type="submit" className="btn btn-primary mt-4">Register</button>
          <p className="text-white">Already have an account?  <Link className="text-white underline font-bold " to="/signin">Signin</Link></p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
