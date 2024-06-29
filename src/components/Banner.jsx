import bannerImage from '../assets/profileImage.jpg';
import bannerWall from '../assets/banner_wallpaper.svg';

const Banner = () => {
    return (
        <>
       
            <div style={
                    {
                        backgroundImage : `url(${bannerWall})`,
                        backgroundSize : "cover",
                    }
                }  className="main-container flex items-center h-full">
                <div className='w-full flex justify-center text-white '>
                   <div className='w-2/3 ms-10'>
                        <h3 className='text-3xl font-semibold'>Hi, i am</h3>
                        <h1 className='mt-4 text-5xl font-bold'>Baljeet Singh</h1>
                        <h2 className='mt-4 text-3xl'>I am a Full Stack developer</h2>
                        <p className='mt-4 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti obcaecati soluta? Nisi ipsam quo explicabo, aperiam facilis possimus blanditiis.</p>

                        <div className='icon-container flex space-x-5'>
                            <a href="" className='hover:bg-orange-500 cursor-pointer border px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                 <i class="fa-brands text-4xl fa-facebook"></i>
                            </a>
                            <a href="" className='hover:bg-orange-500 cursor-pointer border px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                <i class="fa-brands text-4xl fa-instagram"></i>
                            </a>
                            <a href="" className='hover:bg-orange-500 cursor-pointer border px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                <i class="fa-brands text-4xl fa-youtube"></i>
                            </a>
                            <a href="" className='hover:bg-orange-500 cursor-pointer border px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                <i class="fa-solid text-4xl fa-link"></i>
                            </a>
                        </div>
                        <br />

                        <a className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Contact Me</a>
                   </div>
                </div>
                <div className=' w-full flex justify-center'>
                    <img className='rounded-full w-96 px-3 py-5' src={bannerImage} alt="" />
                </div>
            </div>
        </>
    );
}

export default Banner;
