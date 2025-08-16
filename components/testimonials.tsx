import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">Built by Bitcoiners, embraced by the community</h2>
                    <p>Built by Bitcoiners who believe in learning, sharing, and growing together — our journey has always been fueled by the community. Every workshop, every conference, and every project exists because people come together with the same passion. This isn’t just about Bitcoin education, it’s about building a society of Bitcoiners that gets stronger, closer, and more inspiring every year.</p>
                </div>

                <div className="grid gap-4 [--color-card:var(--color-muted)] *:border-none *:shadow-none sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <img
                                className="h-6 w-30"
                                src="https://rightshift.to/wp-content/uploads/2023/04/logo_Right_Shift_text_white-2048x485.png"
                                alt="Right Shift Logo"
                                height="30"
                                width="auto"
                            />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/shekinah.webp"
                                            alt="Piriya Sambandaraksa"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>PS</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Piriya Sambandaraksa</cite>
                                        <span className="text-muted-foreground block text-sm">RightShift</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/jonathan.webp"
                                            alt="Jonathan Yombo"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Jakk Goodday</cite>
                                        <span className="text-muted-foreground block text-sm">Rightshift</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/yucel.webp"
                                            alt="Yucel Faruksahan"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>SR</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Somnuke Rightshift</cite>
                                        <span className="text-muted-foreground block text-sm">Rightshift</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/rodrigo.webp"
                                            alt="Rodrigo Aguilar"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>MS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Maniporn Sambandaraksa</p>
                                        <span className="text-muted-foreground block text-sm">Rightshift</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
