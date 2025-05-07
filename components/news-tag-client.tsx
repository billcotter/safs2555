'use client';

import { NewsArticle } from './news-article';

interface NewsTagClientProps {
  tag: string;
  articles: Array<{
    title: string;
    category: string;
    date: string;
    image: string;
    excerpt: string;
    slug: string;
  }>;
}

export function NewsTagClient({ tag, articles }: NewsTagClientProps) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>
        News tagged with &quot;{tag}&quot;
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {articles.map((article) => (
          <NewsArticle key={article.slug} {...article} />
        ))}
      </div>
    </div>
  );
}
