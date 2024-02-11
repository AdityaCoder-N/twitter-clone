"use client"
import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react";
import Input from "../input";
import Modal from "../modal";
import useRegisterModal from "@/hooks/useRegisterModal";

const LoginModal = () => {

    const RegisterModal = useRegisterModal();
    const loginModal = useLoginModal();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    const onToggle = useCallback(()=>{
        if(loading){
            return;
        }
        loginModal.onClose();
        RegisterModal.onOpen();
    },[loading,RegisterModal,loginModal])

    const onSubmit= useCallback(async ()=>{
        try {
            setLoading(true);

            // TO DO ADD LOGIN
            loginModal.onClose();
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false);
        }
    },[loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email" 
                onChange={(e)=>setEmail(e.target.value)}
                disabled={loading}
                value={email}
            />
            <Input 
                placeholder="Password" 
                onChange={(e)=>setPassword(e.target.value)}
                disabled={loading}
                value={password}
            />
        </div>
    )

    const footerContent=(
        <div className="text-neutral-400 text-center mt-4">
            <p>First time using Twitter ? <span onClick={onToggle} className="text-white cursor-pointer hover:underline"> Create an Account</span> </p>
        </div>
    )

  return (
    <Modal 
        disabled={loading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}/>
  )
}

export default LoginModal