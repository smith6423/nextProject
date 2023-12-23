"use client"

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";


export default function Login(){
    const router =useRouter();
    router.replace('/i/flow/login');
    return (
        <Main/>
    );
}

// logcalhost:3000 -> localhost:3001/login -> localhost:3000/i/flow/login

//router.push 뒤로가기시 한단계전
// -> localhost:3001/login -> localhost:3000/i/flow/login

//router.replace  뒤로가기시 두단계 전으로 
// logcalhost:3000 -> -> localhost:3000/i/flow/login