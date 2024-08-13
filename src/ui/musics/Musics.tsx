import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import musics from '@/data/musics';

const Musics: React.FC = () => {
    return (
        <div className="flex flex-col lg:grid grid-cols-3 gap-8">
            {musics.map((music) => (
                <Link href={`${music.linkHref}`} className="relative max-w-sm bg-white border border-gray-200 rounded-xl shadow hover:scale-110 transition duration-150 ease-in-out group" target="_blank" key={music.id}>
                    <Image
                        className="rounded-t-lg"
                        src={music.image}
                        alt={music.title}
                        width={500}
                        height={300}
                        layout="responsive"
                    />
                    <div className="p-5 relative">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{music.title}</h5>
                        <p className=" text-sm font-normal text-gray-700">{music.organizer}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Musics;