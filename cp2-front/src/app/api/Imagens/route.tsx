export async function GET() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=kXO8zL2dtbE4EU9Uyv8bMDfrgCb0HbPr6FTJ5KCH&count=1");    
    const urlImagem = response.url;
    return urlImagem;
}
