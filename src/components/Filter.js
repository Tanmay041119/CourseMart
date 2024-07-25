function Filter({filterData,category,setCategory}){
    function filterHandler(e){
        setCategory(e);
    }
    return (
        
        <div className=" w-11/12 flex flex-wrap justify-center mx-auto py-2 space-x-6">
            {
                filterData.map(  (data)=>{
                    return (
                        <button key={data.id} onClick={()=>filterHandler(data.title)} className={`px-3 py-1 text-lg rounded-md font-medium text-white
                         bg-black hover:bg-opacity-50 transition-all duration-200 mt-3 mb-2
                         ${category===data.title ? " bg-opacity-60 border-white border-2" : "bg-opacity-40 border-transparent"}
                         `}>
                        {data.title}
                        </button>
                    );
                })
            }
        </div>
    );
}
export default Filter