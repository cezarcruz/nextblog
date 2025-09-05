export default function Home() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-none border-2 border-black p-6 md:p-8 neobrutalism-shadow">
      <div className="text-center mb-8">
        <img
          src="https://avatars.githubusercontent.com/u/3604822?s=400&u=afaa0bd96470f6d7f75f96a3c46e09cd6ff80ddc&v=4"
          alt="Foto de Perfil"
          className="w-32 h-32 rounded-none mx-auto mb-4 border-2 border-black neobrutalism-shadow"
        />
        <h1 className="text-3xl font-bold text-black mb-1">@cezarcruz</h1>
        <p className="text-gray-700 text-sm">Desenvolvedor</p>
      </div>

      <div className="flex flex-col space-y-4">
        <a
          href="https://github.com/cezarcruz"
          target="_blank"
          className="bg-yellow-400 text-black font-bold py-4 px-6 rounded-none text-center
                       border-2 border-black neobrutalism-shadow active:bg-yellow-500"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/cezar-cruz/"
          target="_blank"
          className="bg-yellow-400 text-black font-bold py-4 px-6 rounded-none text-center
                       border-2 border-black neobrutalism-shadow active:bg-yellow-500"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/seu_usuario/"
          target="_blank"
          className="bg-yellow-400 text-black font-bold py-4 px-6 rounded-none text-center
                       border-2 border-black neobrutalism-shadow active:bg-yellow-500"
        >
          Instagram
        </a>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-black mb-4 border-b-2 border-black pb-2">Tecnologias</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 text-black font-semibold text-xs py-2 px-3 rounded-none border-2 border-black neobrutalism-shadow">Java</span>
          <span className="bg-gray-200 text-black font-semibold text-xs py-2 px-3 rounded-none border-2 border-black neobrutalism-shadow">AWS</span>
          <span className="bg-gray-200 text-black font-semibold text-xs py-2 px-3 rounded-none border-2 border-black neobrutalism-shadow">Linux</span>
          <span className="bg-gray-200 text-black font-semibold text-xs py-2 px-3 rounded-none border-2 border-black neobrutalism-shadow">JavaScript</span>
          <span className="bg-gray-200 text-black font-semibold text-xs py-2 px-3 rounded-none border-2 border-black neobrutalism-shadow">Docker</span>
        </div>
      </div>

    </div>
  );
}
