// cwh code

// import React from "react";
// import { useRef } from "react";

// const Manager = () => {
//   const ref = useRef();
//   const showPassword = () => {
//     alert("show the password");
//     if (ref.current.src.includes("icons/iconcross.png")) {
//       ref.current.src = "icons/eye.png";
//     } else {
//       ref.current.src = "icons/eyecross.png";
//     }
//   };
//   return (
//     <>
//       <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#a5f3fc_1px,transparent_1px),linear-gradient(to_bottom,#a5f3fc_1px,transparent_1px)] bg-[size:6rem_4rem]">
//         <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#6ee7b7,transparent)]"></div>
//       </div>
//       <div className="mycontainer">
//         <p className="text-green-900 text-lg text-center">
//           Welcome to
//           <span className="text-green-700 text-2xl font-bold">
//             <span>&lt;</span> <span className="text-black">Pass</span>Wordrobe
//             <span>/&gt;</span>
//           </span>
//           your personal digital safe. Our platform is designed to securely store
//           and manage all your passwords for various websites in one convenient
//           location. With robust encryption and a user-friendly interface,
//           PassWordrobe ensures that your credentials are always protected and
//           easily accessible whenever you need them. Say goodbye to the hassle of
//           remembering multiple passwords and enjoy the peace of mind that comes
//           with knowing your information is safe with us
//         </p>
//         <div className="flex flex-col p-4 text-black gap-8 items-center">
//           <input
//             placeholder="Enter Website URL"
//             className="rounded-full border border-green-500 w-full p-4 py-1"
//             type="text"
//             name=""
//             id=""
//           />
//           <div className="flex w-full justify-between gap-8">
//             <input
//               placeholder="Enter Username"
//               className="rounded-full border border-green-500 w-full p-4 py-1"
//               type="text"
//               name=""
//               id=""
//             />
//             <div className="relative">
//               <input
//                 placeholder="Enter Password"
//                 className="rounded-full border border-green-500 w-full p-4 py-1"
//                 type="text"
//                 name=""
//                 id=""
//               />
//               <span
//                 className="absolute right-[3px] top-[4px] cursor-pointer "
//                 onClick={showPassword}
//               >
//                 <img className="p-1" width={26} src="icons/eye.png" alt="" />
//               </span>
//             </div>
//           </div>
//           <button className="flex justify-center items-center gap-4 hover:bg-green-500 bg-green-600 rounded-full px-4 py-2 w-fit border">
//             <lord-icon
//               src="https://cdn.lordicon.com/jgnvfzqg.json"
//               trigger="hover"
//             ></lord-icon>
//             Add Password
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Manager;

// my code
import { useEffect, useState } from "react";

const Manager = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const togglePasswordVisibility = () => {
    // Toggle the state
    setIsPasswordShown(!isPasswordShown);
  };

  const savePassword = () => {
    // console.log(form);
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#a5f3fc_1px,transparent_1px),linear-gradient(to_bottom,#a5f3fc_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#6ee7b7,transparent)]"></div>
      </div>
      <div className="mycontainer">
        <p className="text-green-900 text-lg text-center">
          Welcome to
          <span className="text-green-700 text-2xl font-bold">
            <span>&lt;</span> <span className="text-black">Pass</span>Wordrobe
            <span>/&gt;</span>
          </span>
          your personal digital safe. Our platform is designed to securely store
          and manage all your passwords for various websites in one convenient
          location. With robust encryption and a user-friendly interface,
          PassWordrobe ensures that your credentials are always protected and
          easily accessible whenever you need them. Say goodbye to the hassle of
          remembering multiple passwords and enjoy the peace of mind that comes
          with knowing your information is safe with us
        </p>
        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type={isPasswordShown ? "text" : "password"} // Toggle input type
                name="password"
                id=""
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <img
                  className="p-1"
                  width={26}
                  src={isPasswordShown ? "icons/eyecross.png" : "icons/eye.png"} // Toggle icon source
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-4 hover:bg-green-500 bg-green-600 rounded-full px-4 py-2 w-fit border"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
