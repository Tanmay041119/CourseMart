
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
function Card(props){
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;
        function clickHandler(){
            if(likedCourses.includes(course.id)){

                setLikedCourses((prev)=>{
                    return (prev.filter((id)=>{
                        return id!==course.id;
                    }));
                })
                toast.warning("Like Removed")
            }
            else{
                setLikedCourses((prev)=>{
                    return ([...prev,course.id])
                })
                toast.success("Liked Successfully")
            }
        }
    return (
        <div className="w-[300px]  rounded-md  overflow-hidden bg-imagecss" >
            <div className=" relative">
                <img src={course.image.url} alt={course.image.alt}/>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-10px] flex justify-center items-center">
                <button onClick={clickHandler}>
                
                {
                likedCourses.includes(course.id)? <FcLike fontSize="1.75rem"/>: <FcLikePlaceholder fontSize="1.75rem"/>
                }
                </button>
            </div>
            </div>
            
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className="text-white mt-2">{
                    course.description.length>100 ? (course.description.substr(0,100))+"..." : course.description
                }</p>
            </div>
        </div>
    );
}
export default Card;