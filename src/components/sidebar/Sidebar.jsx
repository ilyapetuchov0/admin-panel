import "./sidebar.scss"
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">
                        googolplex
                    </span>
                </Link>

            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">СПИСКИ</p>
                    <Link to="/users" style={{textDecoration: "none"}}>
                        <li>
                            <PersonIcon className="icon" />
                            <span>Ученики</span>
                        </li>
                    </Link>
                    <li>
                        <DateRangeIcon className="icon" />
                        <span>Расписание</span>
                    </li>
                    <li>
                        <StoreIcon className="icon" />
                        <span>Товары</span>
                    </li>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Заказы</span>
                    </li>
                    <p className="title">ПОЛЕЗНОЕ</p>
                    <li>
                        <AssessmentIcon className="icon" />
                        <span>Статистика</span>
                    </li>
                    <p className="title">АДМИН</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Профиль</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Настройки</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Выйти</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;