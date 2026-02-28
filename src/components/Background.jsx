import { LightRays } from "@/components/ui/light-rays";

const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-zinc-950">
            <LightRays />
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-20 animate-pulse">
                <div className="absolute top-1/2 left-1/2 w-full h-full bg-linear-to-r from-blue-900/10 to-purple-900/10 blur-[120px] transform -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen" />
            </div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
};

export default Background;
