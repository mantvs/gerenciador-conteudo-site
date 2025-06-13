import { PostModel } from "@/models/posts/post-models";
import { PostRepository } from "./post-repository";
import { resolve } from "node:path";
import { readFile } from "fs/promises"

// Obtenção do path da raiz do projeto com o "process" do Node e o metodo cwd (current worker dir)
const ROOT_DIR = process.cwd();

// Obtenção dinâmica do path do arquivo JSON que estão os dados
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");

// Classe que implementa o respositório com base no contrato (Interface)
// Ou seja, ela implementa a lógica de acesso aos dados da fonte existente
export class JsonPostRepository implements PostRepository {

  // Metodo personalizado privado (acessível apenas dentro da classe) para leitura do arquivo em disco
  private async readFromDisk(): Promise<PostModel[]> {

    // Váriável com resultado da função integrada "readFile()" que lê o arquivo em disco e retorna string
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8")

    // Variável com resultado do metodo ".parse()" do objeto JSON que converte a string JSON em um objeto JS
    const parsedJson = JSON.parse(jsonContent)

    // Variável com o resultado da extração da propriedade "posts" do objeto JS feita por meio da desestruturação
    const { posts } = parsedJson;

    // Retorno com o conteúdo dos posts
    return posts;

  }

  // O "contrato" da "interface" PostRespository defini que o metodo abaixo esteja nas suas implementações
  // É um metodo assincrono para poder ler os dados do disco e obter os dados de todos os posts
  async findAll(): Promise<PostModel[]> {

    // Variável com o resultado da invocação do metodo da propria classe que faz a leitura no disco
    const posts = await this.readFromDisk();

    // Retorno do metodo com o conteudo dos posts obtidos com a leitura do disco
    return posts

  }

  // O "contrato" da "interface" PostRespository defini que o metodo abaixo esteja nas suas implementações
  // É um metodo assincrono para obter os dados de apenas um post pelo seu ID
  async findById(id: string): Promise<PostModel> {

    // Variável com o resultado da invocação do metodo da propria classe para obter todos os posts
    const posts = await this.findAll()

    // Variável com o resultado da invocação do metodo integrado ".find()" que seleciona o post escolhido
    const post = posts.find(post => post.id === id);

    // Lançamento do erro se o posto com o ID informado não foir encontrado
    if (!post) throw new Error("Post não encontrado");

    // Retorno do metodo com o post "selecionado"
    return post

  }

}