import Blob from "@/ui/Blob";

export default function TitlePage() {
    return (
        <div className="flex items-center justify-center w-full max-w-2xl text-center relative">
            <Blob />
            <div className="relative z-10 m-8 space-y-4 bg-white/30 backdrop-blur-lg rounded-lg">
                <div className="p-5">
                    <h1 className="text-5xl font-bold">Daffa Mohamad Fathoni</h1>
                    <p className="mt-2 font-bold">
                        An undergraduate computer science student at Universitas Indonesia
                    </p>
                </div>
            </div>
        </div>
    );
}