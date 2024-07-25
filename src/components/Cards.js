import React, { useState } from 'react'
import Card from './Card';
function Cards(props){
    let courses=props.courses
    let category=props.category
    let [likedCourses,setLikedCourses]=useState([]);
    function getCourses(){
        let allCourses=[];
        if(category==="All")
        Object.values(courses).forEach(arr=>{
            arr.forEach((courseData)=>{
                allCourses.push(courseData);
            })
        })
        else if(category!=="Liked Courses"){
            return courses[category]
        }
        else{
            Object.values(courses).forEach(arr=>{
                arr.forEach((courseData)=>{
                    if(likedCourses.includes(courseData.id)){
                        allCourses.push(courseData);
                    }
                })
            })
            
        }
      
        return allCourses;
    }
    return (
        <div className=" flex flex-wrap justify-center gap-4 mb-4">
        
            {
                
                getCourses().map((course)=>{
                    return (
                        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                    );
                })
            }
        </div>
    );
}
export default Cards