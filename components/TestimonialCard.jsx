

export default function TestimonialCard({ text, name, role }) {
    return (
        <div className="relative w-full max-w-3xl">
            {/* Bubble */}
            <div className="relative rounded-[40px] border-2 border-[#B9FF66] bg-[#0F1220] p-10 text-white">
                <p className="text-lg leading-relaxed">{text}</p>

                {/* Bubble pointer */}
                <div className="absolute -bottom-4 left-20 h-6 w-6 rotate-315 border-b-2 border-l-2 border-[#B9FF66] bg-[#0F1220]" />
            </div>

            {/* Author */}
            <div className="mt-6 ml-20">
                <p className="font-semibold text-[#B9FF66]">{name}</p>
                <p className="text-sm text-gray-300">{role}</p>
            </div>
        </div>
    )
}
