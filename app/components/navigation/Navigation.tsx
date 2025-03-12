'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"
import { ReactNode, useState } from "react"
import { FaRegUserCircle } from "react-icons/fa";


export default function Navigation(){

    const [profileMenu, setProfileMenu] = useState(false);

    const NavLink = ({to, children}:{to:string, children:ReactNode}) => {
        const pathname = usePathname();
        let pathSplit = pathname?.split('/');
        let toSplit = to.split("/");
        let classStr = "";

        if(pathSplit){
            if(pathSplit[1] && pathSplit[1] == toSplit[1]){
                classStr += "active";
            }
        }

        return <Link href={to} className={classStr} >{children}</Link>

    }

    const userProfileClick = () => {
        if(profileMenu == false)setProfileMenu(true);
        if(profileMenu == true)setProfileMenu(false);
    }

    return (
        <div className="fixed z-10 h-[75px] md:h-auto md:relative bg-white w-full p-0 px-4 py-2 md:py-4 md:px-6 flex items-center justify-between header">
            <h1 className="text-black w-2/6"><NavLink to="/">SUMMS.</NavLink></h1>
            
                <div className={profileMenu == true ? "account-popmenu active" : "account-popmenu" }>
                    <ul className="">
                        <li><NavLink to="/">Home`</NavLink></li>
                        <li><NavLink to="/">Explore`</NavLink></li>
                        <li><NavLink to="/">Library</NavLink></li>
                        <li><NavLink to="/">Saved</NavLink></li>
                    </ul>
                </div>
            
            <button onClick={userProfileClick}><FaRegUserCircle className="text-black text-4xl" /></button>
        </div>
    )
}
