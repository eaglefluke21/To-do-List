
import InsertForm from "../components/InsertForm";


function Home() {


    

    return (
        <div className="flex flex-col min-h-screen  bg-stone-600">

           

            <div className="flex flex-col justify-center items-center p-8">

        <h1 className=" text-xl text-center font-anta text-white p-2  sm:text-3xl  ">

            To do List

        </h1>


        <InsertForm />
       
        </div>






        </div>


    )
}

export default Home;
