import { Link } from "react-router-dom";
import { IoArrowUndoSharp } from "react-icons/io5";
import s from "./BackLink.module.css";

export default function BackLink({ to }) {
    return (
        <Link to={to} className={s.link}>
            <IoArrowUndoSharp fill="rgb(122, 234, 47)" /> Back to movies
        </Link>
    );
}