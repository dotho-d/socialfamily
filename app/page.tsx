import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Navigation */}
      <nav className="absolute top-0 right-0 p-4 z-50 flex gap-4">
        <Button variant="ghost" className="text-sm" asChild>
          <Link href="/blog">Blog</Link>
        </Button>
        <Button variant="ghost" className="text-sm" asChild>
          <Link href="/aide">Aide</Link>
        </Button>
        <Button variant="outline" className="text-sm" asChild>
          <Link href="/auth/login">Connexion</Link>
        </Button>
      </nav>

      {/* Split Hero Section */}
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left Side - Illustrated/Abstract */}
        <div className="relative bg-rose-400 flex items-center justify-center p-12">
          <div className="relative z-10 text-white max-w-lg">
            <div className="mb-8">
              <svg className="w-12 h-12 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L3 8L12 13L21 8L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 16L12 21L21 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              L'accompagnement social réinventé
            </h2>
            <p className="text-lg mb-8 text-white/90">
              La combinaison parfaite entre expertise professionnelle et accompagnement personnalisé
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Découvrir nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Side - Realistic/Professional */}
        <div className="relative bg-white flex items-center justify-center p-12">
          <div className="relative z-10 max-w-lg">
            <h3 className="text-2xl md:text-3xl font-medium mb-8 text-gray-900">
              Nous créons des solutions{" "}
              <span className="text-rose-500">modernes</span> et{" "}
              <span className="text-rose-500">efficaces</span> pour votre accompagnement.
            </h3>
            <div className="grid gap-6">
              <Button 
                size="lg" 
                className="w-full justify-between bg-gray-900 hover:bg-gray-800"
              >
                Espace Professionnel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full justify-between border-gray-200 text-gray-900 hover:bg-gray-50"
              >
                Espace Famille
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}