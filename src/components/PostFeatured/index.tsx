import { PostImageCover } from "../PostImageCover"
import { PostHeading } from "../PostHeading"

export function PostFeatured() {
  return (

  <section className="grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 group">

  <PostImageCover src="/images/bryen_5.png" href="#" alt="Imagem"/>

  <div className="flex flex-col gap-4 justify-center">
    <time className="text-slate-600 block text-sm/tight" dateTime="2025-06-19">
      19/06/2025 20:00
    </time>

    <PostHeading as="h1" url="http://algumacoisa.html">
      Gerenciador de Conteúdo para Blogs
    </PostHeading>

    <p>
      Este é um projeto de exemplo para demonstrar as funcionalidades
      do gerenciador de conteúdo personalizado desenvolvido com as
      tecnologias Python/FastAPI, Next.js, React.js, SQLModel e PostgreSQL.
    </p>
  </div>

  </section>

  )
}