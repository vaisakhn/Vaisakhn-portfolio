import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import tour from '../assets/tour.jpg'

export default function Projects() {

    const config = {
        projects : [
            {
                image: tour,
                description: 'A Tour application where you can view and select tour packages. Built with React js.',
                link: 'https://vaisakhn.github.io/tour-app/'
            },
            {
                image: websiteImg2,
                description: 'Restaurant website. Built with React js.In this project MUI is used for the styling ',
                link: 'https://vaisakhn.github.io/VK-Restaurant/'
            },
            {
                image: websiteImg1,
                description: 'A Ecommerce Website buit with React js.In this project I used APIs to build card components of items to be purchased' ,
                link: 'https://vaisakhn.github.io/VK-Store/'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}