import { PostRepository } from "./post-repository";
import { JsonPostRepository } from "./json-post-repository";

// Exportação do instanciamento da classe
export const postRepository: PostRepository = new JsonPostRepository();