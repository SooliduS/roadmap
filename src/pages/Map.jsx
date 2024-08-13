import Map from "../components/map";

const MapPage = () => {

    return (
    
            <main className=' w-full flex flex-col items-center gap-10 justify-center py-10'>
                <h1 className='text-3xl'>نقشه گنج</h1>
                <Map n1={30} n2={45} />
            </main>
      
    );
};

export default MapPage;
