import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Landing() {
  return (
    <main>
      <section className="bg-[#D6C4B4] h-screen px-6 text-center md:text-left" aria-labelledby="hero-heading">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Text Content */}
          <div className="flex-1 py-10">
            <h1 id="hero-heading" className="text-4xl font-bold text-brown-900 leading-tight">
              Learn. Brew.
              <br />
              Serve.
              <br />
              <span className="text-brown-700">Your Barista<br/> Journey</span>
              <br />
              Begins Here
            </h1>
            <p className="mt-4 text-brown-600 max-w-md">
              Get hands-on training, real café simulations, and expert guidance to become a confident barista.
            </p>
            <Button className="mt-6 bg-yellow-500 px-6 py-3 rounded-full text-white">Enroll Now</Button>
          </div>

          {/* Image */}
          <div className="flex-1 h-screen flex items-center justify-center">
            <Image
              src="/landingimage.png"
              alt="Team of baristas"
              width={500}
              height={700}
              className="rounded-md object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  )
}
