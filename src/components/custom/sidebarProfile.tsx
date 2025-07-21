export default function SidebarProfile() {
    return (
        <div>
            <div className="flex w-full justify-between items-center mb-4">
                <div className="relative inline-block w-fit">
                    <img
                        src="/avatar2.png"
                        alt="Robert Fox's Avatar"
                        className="h-28 w-28 object-cover rounded-full"
                    />
                    <div className="absolute -bottom-0 -right-0 h-10 w-10 rounded-full flex items-center justify-center overflow-hidden shadow-md">
                        <img
                            src="/overlay.jpg"
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="shimmer"
                        />
                        <img
                            src="/check.png"
                            alt="Check Mark Icon"
                            className="w-5 h-5 relative z-2"
                        />
                    </div>
                </div>
            </div>
            <h2 className="text-xl mb-4">
                Robert Fox
            </h2>
            <span className="my-4 text-[#544629]">621 Followers</span>
            <p className="my-4 text-[#544629]">
                His Bio | Author | Writer | Poet | Entrepreneur | Developer
            </p>
            <button className="h-10 px-4 rounded-full flex items-center justify-center relative overflow-hidden my-6">
                <img
                    src="/overlay.jpg"
                    className="absolute inset-0 w-full h-full object-cover scale-200"
                    alt="shimmer"
                />
                <span className="relative z-2 px-3 py-1 rounded-full text-black">
                    Follow
                </span>
            </button>
        </div>
    )
}