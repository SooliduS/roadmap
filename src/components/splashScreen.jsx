const SplashScreen = () => {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center gap-6 p-4'>
            <h2 className='text-lg xl:text-3xl animate-text-slide'>
                به نسخه دمو این وب اپ خوش آمدید
            </h2>
            <div class='flex justify-center items-center gap-1 '>
                <span class='sr-only'>Loading...</span>
                <div class='h-8 w-8 bg-lime-500 rounded-full animate-bounce [animation-delay:-0.4s]'></div>
                <div class='h-8 w-8 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div class='h-8 w-8 bg-indigo-500 rounded-full animate-bounce'></div>
            </div>
        </div>
    );
};

export default SplashScreen;
