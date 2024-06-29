
import bannerWall from '../assets/banner_wallpaper.svg';

const Expertise = () => {

    return (
        <>

                    <div className="font-bold w-full mb-16 text-4xl underline text-center">
                        <h1>My Expertise</h1>
                    </div>

                    <div style={
                                {
                                    backgroundImage : `url(${bannerWall})`,
                                    backgroundSize : "cover",
                                }
                            }  className="main-container flex items-center h-full py-6 mb-10">

                            <div className='w-full flex justify-center text-white '>
                                <div className='w-2/3 ms-10'>
                                        <h2 className='mt-4 text-3xl'>I Love these technologies</h2>
                                        <p className='mt-4 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti obcaecati soluta? Nisi ipsam quo explicabo, aperiam facilis possimus blanditiis.</p>

                                        <br />

                                        <a className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Hire me</a>
                                </div>
                            </div>
                            <div className=' w-full flex flex-wrap justify-center space-x-1 space-y-3'>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Core Java</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Hibernate ORM(tool)</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Spring Framework</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Spring Boot Framework</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Spring security</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">HTML</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Advance Java</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Docker</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Kubernetes</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">AWS</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">JWT authentication</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Bootstrap</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">CSS</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Tailwind</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Junit</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Mockito</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">System design</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">Design and Architecture</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">DSA</a>
                                    <a className="bg-gray-200 px-3 py-1 rounded-full shadow-lg text-2xl" href="/contact">OOPS</a>
                            </div>
                        </div>

                     
        </>
    );
}

export default Expertise;