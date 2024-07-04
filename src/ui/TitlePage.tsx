import React from 'react';
import Blob from "@/ui/Blob";
import Typewriter from '@/ui/Typewriter';

export default function TitlePage() {
    return (
        <div className="flex items-center justify-center w-full max-w-2xl text-center relative">
            <Blob />
            <div className="relative z-10 m-8 space-y-4 bg-white/30 backdrop-blur-lg rounded-lg">
                <div className="p-5">
                    <h1 className="text-5xl font-bold">Daffa Mohamad Fathoni</h1>
                    {/* desktop */}
                    <div className="hidden sm:block flex justify-center">
                        <div className="flex flex-wrap justify-center">
                            <p className="mt-2 font-bold">
                                A computer science student aspiring in&nbsp;
                            </p>
                            <p className="mt-2 font-bold underline">
                                <Typewriter />
                            </p>
                            <div className='mt-2 font-bold'>
                                <span id="cursor">|</span>
                            </div>
                        </div>
                    </div>

                    {/* mobile */}
                    <div className="sm:hidden flex flex-col justify-center">
                        <p className="mt-2 font-bold">
                            A computer science student aspiring in&nbsp;
                        </p>

                        <div className="flex flex-wrap justify-center">
                            <p className="mt-2 font-bold underline">
                                <Typewriter />
                            </p>
                            <div className='mt-2 font-bold'>
                                <span id="cursor">|</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
