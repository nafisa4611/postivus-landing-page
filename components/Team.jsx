import TeamCard from "./TeamCard";

const teamData = [
    {
        id: 1,
        name: "John Smith",
        role: "CEO and Founder",
        experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        imageUrl: "/img/img-team-mouckup-1.png"

    },
    {
        id: 2,
        name: "Jane Doe",
        role: "Director of Operations",
        experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        imageUrl: "/img/img-team-mouckup-2.png"

    },
    {
        id: 3,
        name: "Michael Brown",
        role: "SEO Specialist",
        experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        imageUrl: "/img/img-team-mouckup-3.png"

    },
    {
        id: 4,
        name: "Emily Johnson",
        role: "PP3Manager",
        experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        imageUrl: "/img/img-team-mouckup-4.png"

    },
    {
        id: 5,
        name: "Brian Willians",
        role: "Social Media Specialist",
        experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        imageUrl: "/img/img-team-mouckup-5.png"

    },
    {
        id: 6,
        name: "Sarah Kim",
        role: "Content Creator",
        experience: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
        imageUrl: "/img/img-team-mouckup-6.png"

    },
]


export default function Team() {
    return (
        <section className="mx-4 md:mx-24 my-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
                <h2 className="bg-[#B9FF66] px-6 py-3 rounded-xl text-3xl md:text-4xl font-bold">
                    The Team
                </h2>
                <p className="text-xl">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.map((member) => (
                    <TeamCard
                        key={member.id}
                        name={member.name}
                        role={member.role}
                        experience={member.experience}
                        imageUrl={member.imageUrl}
                    />
                ))}
            </div>
        </section>
    )
}
