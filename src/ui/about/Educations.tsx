import React from 'react';
import educations from '@/data/educations';

const Educations: React.FC = () => {
    return (
        <div>
            <div className="flex items-center">
                <a className="text-2xl font-bold pb-3" href="#educations">Education</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ml-2 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
            </div>

            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {educations.map((education) => (
                    <li key={education.major} className="mb-10 ml-6">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{education.date}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-black">{education.institute}</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{education.major}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Educations;

// Similarly update Experiences and Awards components with appropriate SVG positioning.
