const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-30 animate-pulse">
                <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 blur-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen" />
            </div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
};

export default Background;
