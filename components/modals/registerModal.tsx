"use client"
import useRegisterModal from "@/hooks/useRegisterModal"
import { useCallback, useState } from "react";
import Input from "../input";
import Modal from "../modal";
import useLoginModal from "@/hooks/useLoginModal";

const RegisterModal = () => {

    const RegisterModal = useRegisterModal();
    const loginModal = useLoginModal();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName]=useState("");
    const [username,setUsername]=useState("");

    const [loading,setLoading] = useState(false);

    const onToggle = useCallback(()=>{
        if(loading){
            return;
        }
        RegisterModal.onClose();
        loginModal.onOpen();
    },[loading,RegisterModal,loginModal])

    const onSubmit= useCallback(async ()=>{
        try {
            setLoading(true);

            // TO DO ADD Register && login
            RegisterModal.onClose();
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false);
        }
    },[RegisterModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email" 
                onChange={(e)=>setEmail(e.target.value)}
                disabled={loading}
                value={email}
            />
            <Input 
                placeholder="Name" 
                onChange={(e)=>setName(e.target.value)}
                disabled={loading}
                value={name}
            />
            <Input 
                placeholder="Username" 
                onChange={(e)=>setUsername(e.target.value)}
                disabled={loading}
                value={username}
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
            <p>Already have an account ? <span onClick={onToggle} className="text-white cursor-pointer hover:underline"> Sign in</span> </p>
        </div>
    )

  return (
    <Modal 
        disabled={loading}
        isOpen={RegisterModal.isOpen}
        title="Create an Account"
        actionLabel="Register"
        onClose={RegisterModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}/>
  )
}

export default RegisterModal