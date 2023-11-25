import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import axios from 'axios';


function App() {
  const status = ['Backlog','Todo','In progress','Completed','Cancelled'];
  const priority = [1,2,3,4,5];
  const userId = ['usr-1','usr-2','usr-3','usr-4','usr-5'];

  const [sections,setSections] = useState([]);

  const [statusSelected, setStatusSelected] = useState(false);
  const [prioritySelected, setPrioritySelected] = useState(false);
  const [userSelected, setUserSelected] = useState(true);

  const [prioritySort,setPrioritySort] = useState(false);
  const [titleSort,setTitleSort] = useState(true);

  useEffect(()=>{
    const getData = async ()=>{
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        let newData = response.data;
        console.log(newData);
        if(statusSelected){
          const newSections = status.map((ele, index) => (
            <Section key={index} status={ele} tickets={newData.tickets.filter(ticket => ticket.status === ele)} titleSort={titleSort} prioritySort={prioritySort} />
          ));
          setSections(newSections);
        }
        if(prioritySelected){
          const newSections = priority.map((ele, index) => (
            <Section key={index} priority={ele} tickets={newData.tickets.filter(ticket => ticket.priority === (ele-1))} titleSort={titleSort} prioritySort={prioritySort} />
          ));
          setSections(newSections);
        }
        if(userSelected){
          const newSections = userId.map((ele, index) => (
            <Section key={index} userId={ele} tickets={newData.tickets.filter(ticket => ticket.userId === ele)} users={newData.users} titleSort={titleSort} prioritySort={prioritySort} />
          ));
          setSections(newSections);
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  },[statusSelected, prioritySelected,userSelected,prioritySort,titleSort])

  

  return (
    <div className="App" style={{backgroundColor:'rgb(244,245,248)', minHeight:'100vh'}}>
      <Navbar setStatusSelected={setStatusSelected} setPrioritySelected={setPrioritySelected} setUserSelected={setUserSelected} setTitleSort={setTitleSort} setPrioritySort={setPrioritySort} />
      <div style={{margin:'40px',display:'flex',gap:'25px'}}>
        {sections}
      </div>
    </div>
  );
}

export default App;
