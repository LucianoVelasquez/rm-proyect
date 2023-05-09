import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBard/SearchBar";
import style from "./nav.module.css";
import ima from "./img/icon.svg";

export default function Nav({ onSearch,logout }) {
  return (
    <div className={style.divNav}>
      <Link to={'/home'}> <img className={style.icon} src={ima}/> </Link>
      <section className={style.divSection}>
        <Link className={style.Button} to="/home">Home</Link>
        <Link className={style.Button} to="/about">About</Link>
        
        <button className={style.Button} onClick={logout}>logout</button>
      </section>

      
      
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
}
