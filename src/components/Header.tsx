import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="text-white p-4">
            <nav className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
}

export default Header;
