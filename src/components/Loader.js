import "./Loader.css"
function Loader(){
return (
    <div className=" flex flex-col  items-center space-y-2">
        <div className='spinner'></div>
        <p className=" text-lg bg-Dark font-semibold">Loading...</p>
    </div>
);

}
export default Loader