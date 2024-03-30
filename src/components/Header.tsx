import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex text-xl *:py-2 justify-center flex-row gap-6 items-baseline">
            <div>
                Jankari
            </div>
            <div className="flex flex-row gap-2 ">
                <div className=" rounded-lg px-2 py-4 bg-slate-50 hover:bg-slate-200">
                    <Link to={'/'}>
                        Your Table here
                    </Link>
                </div>
                <div className="rounded-lg px-2 py-4 bg-slate-50 hover:bg-slate-200 active:bg-slate-200">
                    <Link to={'/profiles'}>
                    Your Profiles here
                    </Link>
                </div>
            </div>
            <div>
                Welcome
            </div>
        </div>
    )
}

export default Header