import SearchBar from "../SearchBard/SearchBar"
import style from './nav.module.css'

export default function Nav({onSearch}){;
    return(
        
        <div className={style.divNav}>
            <SearchBar onSearch={onSearch}></SearchBar>
        </div>
    )
} 