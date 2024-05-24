"use client";
import { supabase } from "@/utils/superbase/product";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import React, { useState } from "react";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /** */
  const handelRegister = async (e: any) => {
    e.preventDefault();
    console.log("submit");
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
        
          data: {
            name: name,
          },
        },
      });
      console.log(data);
      console.log("success");

      alert("Check your email for verifica");
    } catch (error) {
      console.log(error);
    }
  };

  return (
<>
<div className='absolute top-0 w-full bg-white py-12 '>
            <div className='w-fit h-dvh mx-auto'>
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme='dark'
                    providers={['google']}
                    onlyThirdPartyProviders={true}
                    
                />

            </div>
        </div>

</>  );
};

export default Signin;
