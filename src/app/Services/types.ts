export interface Article{
    title:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:string;
}

export interface NewsResponse{
    status:string;
    totalResults:number;
    articles:Article[];
}

export interface NewsListProps{
    articles?:Article[];
}