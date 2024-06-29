import { useState } from 'react';
import bannerImage from '../assets/profile2.jpg';

const About = () => {

    const [data,setdata] = useState({
        image : bannerImage,
        title : "Java Full stack developer",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatem fugit perspiciatis pariatur dolorum deleniti sint fugiat
          optio facilis quod reiciendis? Assumenda, temporibus ullam? Asperiores
           sit veritatis harum, rem cum, nihil magni autem commodi dolorem, fugiat
            delectus doloribus totam iusto! Rerum quis
         recusandae error sit dolorem obcaecati ullam ipsum at harum.`
    });

    return(

        <>
            <div className="main-container py-16 bg-gray-100">
                
                <div className="font-bold underline text-4xl text-center">
                    <h1>About me</h1>
                </div>

                <div className='flex items-center mt-5'>
                    
                        <div className=' w-full flex justify-center'>
                            <img className='rounded-full w-96 px-3 py-5' src={data.image} alt="" />
                        </div>

                        <div className='w-full flex justify-center '>
                        <div className='w-2/3 ms-10'>
                                <h1 className='mt-4 text-5xl font-bold'>{data.title}</h1>
                                <p className='mt-4 mb-5'>{data.desc}</p>
                                <br />

                                <a className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg text-2xl" href="/read">Read more...</a>
                        </div>
                        </div>

                </div>

            </div>
        </>
    );
}

export default About;
