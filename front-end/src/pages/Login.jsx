import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          Appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              className="text-primary cursor-pointer underline"
              onClick={() => setState("Login")}
            >
              Login Here
            </span>
          </p>
        ) : (
          <p>
            Create a new Account?{" "}
            <span
              className="text-primary cursor-pointer underline"
              onClick={() => setState("Sign Up")}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;

// import React, { useState } from "react";

// const Login = () => {
//   const [state, setState] = useState("Sign Up");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     // Add logic for handling form submission here
//   };

//   return (
//     <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
//       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">
//           {state === "Sign Up" ? "Create Account" : "Login"}
//         </p>
//         <p>
//           Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment
//         </p>

//         {state === "Sign Up" && (
//           <div className="w-full">
//             <p>Full Name</p>
//             <input
//               className="border border-[#DADADA] rounded w-full p-2 mt-1"
//               type="text"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               required
//             />
//           </div>
//         )}

//         <div className="w-full">
//           <p>Email</p>
//           <input
//             className="border border-[#DADADA] rounded w-full p-2 mt-1"
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>

//         <div className="w-full">
//           <p>Password</p>
//           <input
//             className="border border-[#DADADA] rounded w-full p-2 mt-1"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           />
//         </div>

//         <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">
//           {state === "Sign Up" ? "Create Account" : "Login"}
//         </button>

//         {state === "Sign Up" ? (
//           <p>
//             Already have an account?{" "}
//             <span
//               className="text-primary cursor-pointer underline"
//               onClick={() => setState("Login")}
//             >
//               Login Here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Create a new Account?{" "}
//             <span
//               className="text-primary cursor-pointer underline"
//               onClick={() => setState("Sign Up")}
//             >
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;
