'use client';
import { useRouter } from "next/navigation"

export default function Banner(){

    let router = useRouter();
    
    const BannerClick = () => {
        router.push("/");
    }
    return (
        <div onClick={BannerClick} className="cursor-pointer w-full border-1 border-slate-300 h-auto flex items-center justify-center bg-slate-200 mb-6">
            <img src="https://blacklabelagency.com/wp-content/uploads/2024/03/SUMMS-BANNER-1.png" className="w-full" />
        </div>
    )
}