import { PostModel } from "@/models/posts/post-models";

// Essa interface vai ter os metodos que eu quero que o repositorio tenha
export interface PostRepository {

  // Metodo para retornar todos os posts por meio de uma "Promisse" que resolve com um array de posts
  // No TypeScript quando queremos retornar um array, utilizamos o "[]"
  // Isso não é para ser usado. É basicamente o tipo do objeto Post (PostRepository)
  // Agora é possível utilizar essa interface para qualquer implementação que quisermos (SQLite, JSON, etc..)
  findAll(): Promise<PostModel[]>

  // Metodo para retornar apenas 1 post
  findById(id: string): Promise<PostModel>;

}