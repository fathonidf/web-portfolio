import { Metadata } from 'next';
import Image from 'next/image';
import projects from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const selectedProject = projects.find(project => project.id === id);

  if (!selectedProject) {
    return (
      <div>
        <p>Project not found</p>
      </div>
    );
  }

  const getTechStackImage = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'django':
        return '/tech-stacks-image/django.svg';
      case 'tailwind':
        return '/tech-stacks-image/tailwind.svg';
      case 'reactjs':
        return '/tech-stacks-image/reactjs.svg';
      case 'figma':
        return '/tech-stacks-image/figma.svg';
      case 'nextjs':
        return '/tech-stacks-image/nextjs.svg';
      case 'postgresql':
        return '/tech-stacks-image/postgresql.svg';
      case 'spring':
        return '/tech-stacks-image/spring.svg';
      case 'python':
        return '/tech-stacks-image/python.svg';
      case 'java':
        return '/tech-stacks-image/java.svg';
      case 'javascript':
        return '/tech-stacks-image/javascript.svg';
      default:
        return 'none';
    }
  };

  const getTextColor = (color: string) => {
    switch (color.toLowerCase()) {
      case 'yellow':
        return 'text-yellow-400';
      case 'green':
        return 'text-green-500';
      case 'blue':
        return 'text-blue-500';
      case 'orange':
        return 'text-orange-500';
      default:
        return 'text-black';
    }
  };

  const getBgColor = (color: string) => {
    switch (color.toLowerCase()) {
      case 'yellow':
        return 'bg-yellow-400';
      case 'green':
        return 'bg-green-500';
      case 'blue':
        return 'bg-blue-500';
      case 'orange':
        return 'bg-orange-500';
      default:
        return 'bg-black';
    }
  };

  return (
    <div className="flex flex-col items-start justify-center space-y-5 relative">
      <div className={`absolute top-0 left-5 lg:left-2 w-40 h-52 ${getBgColor(selectedProject.color)} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0`}></div>
      <div className={`absolute top-30 right-1 lg:right-1 w-20 h-80 ${getBgColor(selectedProject.color)} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0`}></div>
      <div className="z-10 bg-white/30 rounded-2xl p-5">
        <p className={`${getTextColor(selectedProject.color)} font-bold text-3xl lg:text-5xl pb-5`}>{selectedProject.title}</p>
        <div className="flex flex-row space-x-5">
          <Image
            className="rounded-2xl"
            src={selectedProject.image}
            alt={selectedProject.title}
            priority quality={100}
            width={600} height={400}
          />
          <div className="flex flex-col space-y-6">
            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                <p className="font-bold text-xl">Team</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>


              </div>
              <p>{selectedProject.team}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                <p className="font-bold text-xl">Links</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                <a href={selectedProject.demoHref} target="_blank" className="text-blue-500 hover:underline">{selectedProject.demoHref}</a>
              </div>

            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                <p className="font-bold text-xl">Tech Stacks</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <div className="flex flex-row space-x-2">
                {selectedProject.techStack.map((tech, index) => (
                  <Image
                    data-tooltip-target="tooltip-no-arrow"
                    key={index}
                    src={getTechStackImage(tech)}
                    alt={`Tech stack ${index}`}
                    width={40} height={40}
                    title={tech}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id='background' className='space-y-5'>
        <a href="#background" className={`${getTextColor(selectedProject.color)} font-bold text-3xl`}>Background</a>
        <p className="text-justify">{selectedProject.background}</p>
      </section>

      <section id='about' className='space-y-5'>
        <a href="#about" className={`${getTextColor(selectedProject.color)} font-bold text-3xl`}>About Project</a>
        <p className="text-justify">{selectedProject.description}</p>
        <p className="text-justify">{selectedProject.detail}</p>
      </section>

    </div>
  );
}
