import Image from "next/image"

export default function ContentSection() {
    return (
        <>
            <section className="py-16 md:py-32">
                <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                    <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Past events</h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                        <div className="relative mb-6 sm:mb-0">
                            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                                <Image src="/img/BTC2024.jpg" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                                <Image src="/img/BTC2024.jpg" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                            </div>
                        </div>

                        <div className="relative space-y-4">
                            <p className="text-muted-foreground">
                                Thailand Bitcoin Conference — from our very first gathering in 2023 <span className="text-accent-foreground font-bold">to a national stage in 2024,</span> bringing together over 700 Bitcoiners from Thailand and around the world, filled with friendship, knowledge, and ever-growing inspiration.
                            </p>
                            <p className="text-muted-foreground">Be part of the next chapter — join us this year and help shape the future of Bitcoin in Thailand.</p>

                            <div className="pt-6">
                                <blockquote className="border-l-4 pl-4">
                                    <p>One unique thing about the Bitcoin community is that it never shrinks — it only grows stronger and closer over time. Thailand Bitcoin Conference exists because everyone in the community comes together to make it happen. This is the society of Bitcoin.</p>

                                    <div className="mt-6 space-y-3">
                                        <cite className="block font-medium">Piriya Sambandaraksa, CEO</cite>
                                        <img className="h-5 w-30" src="https://rightshift.to/wp-content/uploads/2023/04/logo_Right_Shift_text_white-2048x485.png" alt="RightShift Logo" height="20" width="auto" />
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New section: image on right, data on left */}
            <section className="py-16 md:py-32">
                <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                    <div className="grid gap-12 lg:gap-24 grid-cols-1 md:grid-cols-2 items-center">
                        {/* Data on left */}
                        <div className="relative space-y-4 order-2 md:order-1 mt-8 md:mt-0">
                            <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Original Course by Right Shift</h2>
                            <p className="text-muted-foreground">
                                From Zero to Bitcoin Confidence in Just 2 Days —  <span className="text-accent-foreground font-bold">backed by over a decade of Bitcoin education experience,</span>  our workshop distills years of self-learning into a focused journey from economic fundamentals to hands-on Bitcoin skills. Walk away with the understanding and confidence to use Bitcoin in the real world.
                            </p>
                            <p className="text-muted-foreground">Join our 2-day workshop and skip years of trial and error — understand, believe, and start using Bitcoin with confidence.</p>
                            <div className="pt-6">
                                <blockquote className="border-l-4 pl-4">
                                    <p>Learning Bitcoin on your own can take years. With the right guidance, you can understand its value, master its use, and secure your future in just a weekend.</p>
                                    <div className="mt-6 space-y-3">
                                        <cite className="block font-medium">khing, โสด</cite>
                                        <img className="h-5 w-30" src="https://rightshift.to/wp-content/uploads/2023/04/logo_Right_Shift_text_white-2048x485.png" alt="AMD Logo" height="20" width="auto" />
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                        {/* Image on right */}
                        <div className="relative mb-6 md:mb-0 order-1 md:order-2 flex justify-center">
                            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700 w-full max-w-[500px]">
                                <Image src="/img/khing.jpg" className="hidden rounded-[15px] dark:block" alt="collaboration illustration dark" width={1207} height={929} />
                                <Image src="/img/khing.jpg" className="rounded-[15px] shadow dark:hidden" alt="collaboration illustration light" width={1207} height={929} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
