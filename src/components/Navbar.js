import React, { useState } from 'react'
import styles from './navbar.module.css'

function Navbar({setStatusSelected, setPrioritySelected,setUserSelected,setTitleSort,setPrioritySort}) {
    const [showOptions, setShowOptions] = useState(false);
    const [filter,setFilter] = useState('user');
    const [sort,setSort] = useState('title');

    const handleOptions = () => {
        setShowOptions(!showOptions);
    }
    const handleFilter =(e)=>{
        let newFilter = e.target.value;
        setFilter(newFilter);
        setStatusSelected(false);
        setPrioritySelected(false)
        setUserSelected(false);
        if(newFilter==='status')
            setStatusSelected(true);
        if(newFilter==='priority')
            setPrioritySelected(true);
        if(newFilter==='user')
            setUserSelected(true);
    }
    const handleSort = (e)=>{
        let newSort = e.target.value;
        setSort(newSort);

        setTitleSort(false);
        setPrioritySort(false);

        if(newSort==='title')
            setTitleSort(true);
        if(newSort==='priority')
            setPrioritySort(true);
    }


    return (
        <div className={styles.navbar}>
            <div className={styles.display} onClick={handleOptions}>
                <span class="material-symbols-outlined" >tune</span>
                &nbsp;Display&nbsp;
                <span class="material-symbols-outlined">expand_more</span>
            </div>


            {
                showOptions ?
                    <div className={styles.options}>
                        <div>
                            <span>Grouping</span>
                            <select onChange={handleFilter} value={filter}>
                                
                                <option value='status'>Status</option>
                                <option value='priority'>Priority</option>
                                <option value='user'>User</option>
                            </select>
                        </div>
                        <div>
                            <span>Ordering</span>
                            <select onChange={handleSort} value={sort}>
                                <option value='title'>Title</option>
                                <option value='priority'>Priority</option>
                            </select>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default Navbar