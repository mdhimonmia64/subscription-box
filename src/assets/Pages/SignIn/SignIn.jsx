import React, { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../../RootLayout/RootLayout";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../../firebase.config";


const SignIn = () => {
  const {handleSignIn} = useContext(AuthContext);
  const location = useLocation();
  const form = location?.state?.from;
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const forms = e.target;
    const email = forms.email.value;
    const password = forms.password.value;

    if(password.length < 6){
          toast.success("Password must be equal or greater than 6");
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
              handleSignIn(email,password)
              .then((result)=>{
                navigate(form?form:"/")
                toast.success("Sign in Successfully")
              })
              .catch((error)=>{
                const errorMessage = error.message;
                toast.error(errorMessage)
              })
  }


const handleForgetPassword = () => {
  const email = emailRef.current.value;

  if (!email) {
    toast.error("Please enter your email address before resetting password.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("A password reset email has been sent.");
    })
    .catch((error) => {
      toast.error(error.message);
    });
};



  return (
    <div className=" py-40">
      <div className="card bg-[url('./imge-1.jpg')] w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-semibold text-white text-center">Sign in</h1>
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label text-white">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="input"
              placeholder="Email"
            />
            <label className="label text-white">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div onClick={handleForgetPassword}>
              <a className="link link-hover text-white">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
            <p className="text-white">
              Already have an account?{" "}
              <Link className="text-white font-bold underline" to="/signup">
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
