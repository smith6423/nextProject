import { NextPage } from "next";
import Link from "next/link";

const NotFound : NextPage = ()=>{
    return(
        <div>
            이페이지는 존재하지 않습니다.
            <Link href='/search'>검색</Link>
        </div>
    );
}

export default NotFound;