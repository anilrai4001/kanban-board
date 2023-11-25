import React, { useEffect, useState } from 'react'
import styles from './section.module.css'
import Card from './Card'

function Section({status,tickets,priority,users,userId,titleSort,prioritySort}) {
    const [cards,setCards] = useState([]);
    const priorityArr = ['No priority', 'Low', 'Medium', 'High','Urgent'];
    const [ user,setUser] = useState({});

    const sortByPriority = ()=>{
        tickets.sort((a,b)=>b.priority-a.priority);
    }
    const sortByTitle = ()=>{
        tickets.sort((a,b)=>a.title.localeCompare(b.title));
    }

    useEffect(()=>{
        if(prioritySort)
            sortByPriority();
        if(titleSort)
            sortByTitle();
        let newCards = tickets.map((data,idx)=><Card key={idx} data={data} />);
        setCards(newCards);
        if(users){
            setUser(users.find(user=>user.id===userId));
        }
    },[status,priority,tickets,titleSort,prioritySort])

    return (
        <div className={styles.section}>
            <div className={styles.topbar}>
                <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                    <div className={styles.circle}></div>
                    <div>{status ? status : priority ? priorityArr[priority-1] : user.name}
                    </div>
                    <div>{tickets.length}</div>
                </div>

                <div style={{display:'flex',gap:'10px',alignItems:"center"}}>
                    <div>+</div>
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </div>
            
        {cards}

        </div>
    )
}

export default Section