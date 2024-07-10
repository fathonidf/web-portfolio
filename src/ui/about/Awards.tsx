import React from 'react';
import Link from "next/link";
import awards from '@/data/awards';

const Awards: React.FC = () => {
    return (
        <div>
            <div className="flex items-center">
                <a className="text-2xl font-bold pb-3" href="#awards">Awards</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ml-2 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>
            </div>

            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {awards.map((award) => (
                    <li key={award.title} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{award.date}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-black">{award.title}</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{award.institution}</p>

                        <div className="relative inline-flex group">
                            <div
                                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-yellow-700 to-yellow-400 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>

                            <a href={award.href} target="_blank" className="relative inline-flex items-center justify center px-4 py-2 transition-all duration-200 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-yellow-600 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-yellow-600">See certificate<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></a>

                        </div>
                        
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Awards;