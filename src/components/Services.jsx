
const Services = () => {

    return(
        <>

            <div className="main-container py-16">
                <div className="font-bold mb-16 text-4xl underline text-center">
                    <h1>My Services</h1>
                </div>

                <div className="flex items-center">

                    <div className='cursor-pointer hover:bg-gray-200 w-1/3 px-3 py-8 ms-10 text-center bg-gray-100 rounded-lg'>
                            <i class="fa-brands text-6xl fa-aws"></i>
                            <h1 className='mt-4 text-3xl font-bold'>Web Development</h1>
                            <p className='mt-4 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti obcaecati soluta? Nisi ipsam quo explicabo, aperiam facilis possimus blanditiis.</p>
                            <br />

                            <a className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Contact Me</a>
                    </div>

                    <div className='cursor-pointer hover:bg-gray-200 w-1/3 px-3 py-8 ms-10 text-center bg-gray-100 rounded-lg'>
                            <i class="fa-sharp fa-solid text-6xl fa-robot"></i>
                            <h1 className='mt-4 text-3xl font-bold'>Android Development</h1>
                            <p className='mt-4 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti obcaecati soluta? Nisi ipsam quo explicabo, aperiam facilis possimus blanditiis.</p>
                            <br />

                            <a className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Contact Me</a>
                    </div>

                    <div className='cursor-pointer hover:bg-gray-200 w-1/3 px-3 py-8 ms-10 text-center bg-gray-100 rounded-lg'>
                            <i class="fa-brands text-6xl fa-connectdevelop"></i>
                            <h1 className='mt-4 text-3xl font-bold'>Backend Development</h1>
                            <p className='mt-4 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti obcaecati soluta? Nisi ipsam quo explicabo, aperiam facilis possimus blanditiis.</p>
                            <br />

                            <a className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Contact Me</a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Services;