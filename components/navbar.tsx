import Image from "next/image"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-black/90 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-center px-6 py-6 md:py-8">
        <div className="flex items-center gap-2">
          <Image
            src="/alfa-logo.png"
            alt="Alfa Bursátil Logo"
            width={200}
            height={200}
            className="h-20 w-auto md:h-[100px]"
          />
          <span className="text-4xl md:text-5xl font-black tracking-tighter text-white brand-shadow">
            Alfa Bursátil
          </span>
        </div>
      </div>
    </nav>
  )
}