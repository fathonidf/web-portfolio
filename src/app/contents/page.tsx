import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contents',
};

export default function ContentsPage() {
    return (
        <div>
            <div className="z-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-x-5">
                <p className="text-black font-bold text-2xl lg:text-5xl">Contents Under Construction</p>
            </div>
            <div className="z-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-x-5">
                <p className="text-black font-bold text-2xl lg:text-5xl">Contents Under Construction</p>
            </div>
            <div className="z-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-x-5">
                <p className="text-black font-bold text-2xl lg:text-5xl">Contents Under Construction</p>
            </div>
            <div className="z-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-x-5">
                <p className="text-black font-bold text-2xl lg:text-5xl">Contents Under Construction</p>
            </div>

            
        </div>
    );
}