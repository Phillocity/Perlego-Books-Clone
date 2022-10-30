export default interface bookInterface {
  _id: string;
  unique_url: string,
  title: string,
  author: string,
  description: string,
  img: string,
  publisher: string,
  category: string
  topic: string | null,
  year: number,
  pages: number | null
}
