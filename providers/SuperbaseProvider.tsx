"use client"
import { Database } from "@/types_db"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {SessionContextProvider} from "@supabase/auth-helpers-react"
import { useState } from "react";
interface SuperbaseProviderProps{
    children:React.ReactNode;
};
const SuperbaseProvider:React.FC<SuperbaseProviderProps>=({
    children
})=>{
const [superbaseClient]=useState(()=>createClientComponentClient<Database>(
    
));
return(
    <SessionContextProvider supabaseClient={superbaseClient}>
{children}
    </SessionContextProvider>
)
}
export default SuperbaseProvider;