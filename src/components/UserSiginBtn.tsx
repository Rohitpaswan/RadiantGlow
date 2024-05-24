/** Signin-btn for desktop  */

import { supabase } from "@/utils/superbase/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import img1 from "../../public/img/ab2.jpg";
import { IoMdArrowDropdown } from "react-icons/io";

const UserSiginBtn: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setIsLogin(!!user); // Convert user object to boolean to set isLogin state
      setIsLoading(false);
    };
    getUserData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="relative ">
      {!isLogin ? (
        <button
          className=" text-sm px-6 py-2 w-fit inline-block rounded-full border-2 border-zinc-700 text-zinc-400 hover:bg-black hover:text-zinc-100 hover:border-zinc-100 transition-colors duration-200 ease-in-out"
          onClick={() => {
            router.push("/signin");
            console.log(isLogin);
          }}
        >
          Signin
        </button>
      ) : (
        <button
          onClick={() => setToggle(!toggle)}
          className="flex items-center justify-between text-sm px-5 py-1 gap-3 rounded-full border-2 border-zinc-700 text-zinc-400 hover:bg-black hover:text-zinc-100 hover:border-zinc-100 transition-colors duration-200 ease-in-out w-fit"
        >
          <div className="w-12">
            <Image
              src={user.identities[0].identity_data.avatar_url}
              alt="user_avatar"
              className="w-10 h-10 rounded-full object-cover"
              width={100}
              height={100}
            />
          </div>
          <span className="relative">
            {user.email}
            <IoMdArrowDropdown className="text-3xl absolute right-[-7px] top-3 " />
          </span>
        </button>
      )}
      {isLogin && toggle && (
        <button
          className="absolute right-[6px] top-[60px] text-sm py-2 px-5 rounded-full border-2 border-zinc-700 text-zinc-400 hover:bg-black hover:text-zinc-100 hover:border-zinc-100 transition-colors duration-200 ease-in-out w-fit"
          onClick={async () => {
            await supabase.auth.signOut();
            setIsLogin(false);
            setUser(null);
            console.log("Logged out");
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default UserSiginBtn;
