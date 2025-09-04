import Link from 'next/link'

const members = [
    {
        name: 'Piriya Sambandaraksa',
        role: 'Co-Founder & Chief Executive Officer',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/team_CEO_AJ-scaled.jpg',
        link: 'https://nostree.me/npub1prya33fnqerq0fljwjtp77ehtu7jlsjt5ydhwveuwmqdsdm6k8esk42xcv',
    },
    {
        name: 'Maniporn Sambandaraksa',
        role: 'Co-Founder & Chief Operating Officer',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/1756892047458-scaled.jpg',
        link: 'https://nostree.me/npub1e963pmyq9q6873njkzxu279l8rh3mymxj9y5lq3x3hkeyj5s2pkqut3z4f',
    },
    {
        name: 'Jakk Goodday',
        role: 'Co-Founder & Chief Motivation Officer',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/FB_IMG_1756800566887.jpg',
        link: 'https://nostree.me/npub1mqcwu7muxz3kfvfyfdme47a579t8x0lm3jrjx5yxuf4sknnpe43q7rnz85',
    },
    {
        name: 'Phatrapol Nuanyai (Somnuke)',
        role: 'Co-founder & Chief Content Officer',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/RS_Unt.jpg',
        link: 'https://nostree.me/npub1xzh2kqynr29x6j3ln6x05f26ha0c0ucfr280uzljftlgcthv9r6skqe7dt',
    },
    {
        name: 'Naris Huajai',
        role: 'Head of Web Operations',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/RS_PED.jpg',
        link: 'https://nostree.me/npub1ysvk3na2kzmfy3yw9mj2947srkqpm7w3m4nmhey2sdet9xg9480qjn54x4',
    },
    {
        name: 'Piyapong Bhookham',
        role: 'Head of Editorial',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/สำเนาของ-TBC-2024-Day-2-Main-Stage-by-NYS-1033-scaled.png',
        link: 'https://nostree.me/npub15l5mxmljftnnqur8gf2nkjj2yuemqy2kuly7yc29lx7x598svx5s447rgk',
    },
    {
        name: 'Siraphop Nilbodee',
        role: 'Head of Bitcoin Education',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/RS_Khing.jpg',
        link: 'https://nostree.me/npub1a8wreeghu0j8g4zqgzex53sq38gjwjdp5czxnu3rfydnz8n8yu2spqkavy',
    },
    {
        name: 'Krittanai Peanjaroen',
        role: 'Bitcoin Technology Product Developer',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/RS_Munich.png',
        link: 'https://nostree.me/npub1vm0kq43djwdd4psjgdjgn9z6fm836c35dv7eg7x74z3n3ueq83jqhkxp8e',
    },
    {
        name: 'Phoovich Phuengphaendin',
        role: 'Bitcoin Technology Product Developer',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/RS_Movie.png',
        link: 'https://nostree.me/npub1cp2wc9mqvuu8xk7m05qapp9j6sx99zucl280jzygm3t305fpkhcsh6z7zz',
    },
    {
        name: 'Thanakrit Sangnongban',
        role: 'Bitcoin Technology Product Developer',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/สำเนาของ-A7C03772-scaled.jpg',
        link: 'https://nostree.me/npub1qd6zcgzukmydscp3eyauf2dn6xzgfsevsetrls8zrzgs5t0e4fws7re0mj',
    },
    {
        name: 'Chanwut Norachan (DJ TAR)',
        role: 'Bitcoin Technology Product Developer',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/RS_TAR.jpg',
        link: 'https://nostree.me/npub1m008pf6d9w3hrsqwrqmg3w5rp2zjnxzrl7a5entl4nyecwdn3avsrfeuf6',
    },
    {
        name: 'Apiruk Jindasiriphun',
        role: 'Media Producer & Host [Right Talk and Just Economic]',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/RS_Soup.jpg',
        link: 'https://nostree.me/npub16hpaqcm8zhc6n4d79tu2mtsf9464093r4v3r7l5hq5tpsng3txesw3tu5f',
    },
    {
        name: 'Watcharapong Ritkhampee',
        role: 'Bitcoin Legal Specialist',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/RS_Itsara-scaled.jpg',
        link: 'https://nostree.me/npub1z7k4pffj7250eaydd3ya0v07mmzecylcq9cw5af68zu39q0k4u3qj6xre4',
    },
    {
        name: 'Patompong Pasavekin',
        role: 'Media Producer & Storyteller',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/RS_Pong.jpg',
        link: 'https://nostree.me/npub1en9ma92rj4ksr64l0ed0fh9588g8mn0ht0v0m87ssx0slvgrnkasf5ws53',
    },
    {
        name: 'Juranon Burapaka',
        role: 'Content Marketing Specialist',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/IMG_20250803_182556-scaled.jpg',
        link: 'https://nostree.me/npub1ju8la595yg7h90qm8lm95hvqajgdgu2c6f9mf8uwwe7lurrxarcsycsv5w',
    },
    {
        name: 'Juttuporn Jaiklar',
        role: 'Content Creator & Host [Right News]',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/IMG_20250902_222223-scaled.jpg',
        link: 'https://nostree.me/npub1z7k4pffj7250eaydd3ya0v07mmzecylcq9cw5af68zu39q0k4u3qj6xre4',
    },
    {
        name: 'Orraphan Chanson',
        role: 'Content Creator',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/RS_NIM.jpg',
        link: 'https://nostree.me/npub1en9ma92rj4ksr64l0ed0fh9588g8mn0ht0v0m87ssx0slvgrnkasf5ws53',
    },
    {
        name: 'Piyawan Leelarungrayub',
        role: 'Project Coordinator',
        avatar: 'https://rightshift.to/wp-content/uploads/2025/09/RS_U.png',
        link: 'https://nostree.me/npub1ju8la595yg7h90qm8lm95hvqajgdgu2c6f9mf8uwwe7lurrxarcsycsv5w',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Team</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>Built by Bitcoiners who believe in learning, sharing, and growing together — our journey has always been fueled by the community. Every workshop, every conference, and every project exists because people come together with the same passion. This is not just about Bitcoin education, it is about building a society of Bitcoiners that gets stronger, closer, and more inspiring every year.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden">
                                <img
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                    src={member.avatar}
                                    alt="team member"
                                    width="826"
                                    height="1239"
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link
                                            href={member.link}
                                            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            nostree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
