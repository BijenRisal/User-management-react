import { Link } from "react-router-dom"

const Sidebar = () => {

    return (
        <div class="sidebar">

            <ul class="Nav">
                <li>
                    <Link to="/user-management">User Management</Link>
                </li>
                <li>
                    <Link to="/Faq"> FAQ  </Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>

            </ul>
        </div>
    );

}
export default Sidebar;