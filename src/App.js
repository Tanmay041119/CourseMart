import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { filterData,apiUrl } from "./data";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [courses,setCourses]=useState(null);
  const[loding,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title)
  async function fetchData(){
    setLoading(true);
    try{
      const result=await fetch(apiUrl);
      const data=await result.json();
      setCourses(data.data);
    }
    catch(err){
       console.log('error hai bhai');
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (

    <div className=" w-full overflow-x-hidden min-h-[100vh] flex flex-col bg-bgDark2">
    <div className="">
    <Navbar/>
    </div>
      
      <div>
      <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
     
      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap p-4">
        {
          loding ? (<Loader/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
      
    </div>
  );
}

export default App;
