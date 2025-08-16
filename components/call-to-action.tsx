import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
                    <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="https://www.canva.com/design/DAGwNBaQp6M/_vNQR2CUBya55UpjFoIrwA/view?utm_content=DAGwNBaQp6M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf9bb004246">
                                <span>Become a sponsor</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/">
                                <span>book a Ticket</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
