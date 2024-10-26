import axios from "axios";



export interface Article{
    title:string;
    description:string;
    content:string;
    url:string;
    urlToImage:string;
}

export interface NewsResponse{
    status:string;
    totalResults:number;
    articles:Article[];
}


export const fetchNews=async (category:string ='general'):Promise<NewsResponse>=>{
    const apiKey =process.env.NEXT_PUBLIC_NEWS_API_KEY;

    if (!apiKey){
        throw new Error('API key is missing. Add NEXT_PUBLIC_NEWS_API_KEY to your environment variables.');
    }

    try {
        const response = await axios.get<NewsResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5bb1f587965c4e8fbb2a370cd886ab93',{
            params:{
                country:'us',
                category:category,
                apiKey:apiKey
            },
        });
        return response.data;
    } catch(error:any){
        console.error('Error fetching news:', error.message || 'error');
        throw new Error(error.response?.data?.message||'Failed to fetch news');
    }
};