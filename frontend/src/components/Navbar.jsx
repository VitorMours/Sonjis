import { Link } from "react-router";

export default function Navbar() {
    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="flex-none">
                <p className="p-3 font-bold text-xl">Sonjis</p>
            </div>

            <ul className="menu menu-horizontal px-1">
                <li><Link to="/">Home Page</Link></li>
                <li>
                    <details>
                        <summary>Ferramentas</summary>
                        <ul className="dropdown-content bg-base-300 p-3 pt-0 rounded-t-none gap-2">
                            <li className="m-1"><Link to="/chat">Chat</Link></li>
                            <li className="m-1"><Link to="/camera">Camera</Link></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    );
}