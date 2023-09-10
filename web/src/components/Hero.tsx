"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import nlwLogo from "../assets/nlw-spacetime-logo.svg";
export function Hero() {
  const router = useRouter();
  return (
    <div
      className="space-y-5"
      onClick={() => {
        router.push("/");
      }}
    >
      <Image src={nlwLogo} alt="Logo NLW" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-bold uppercase leading-none text-black transition-all hover:opacity-80"
        href="/memories/new"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  );
}
