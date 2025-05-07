'use client';

import { NewsArticle } from './news-article';

interface NewsTagClientProps {
  tag: {
    title: string;
    description: string;
    articles: Array<{
      title: string;
      category: string;
      date: string;
      image: string;
      excerpt: string;
      slug: string;
    }>;
  };
}

export function NewsTagClient({ tag }: NewsTagClientProps) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>{tag.title}</h1>
      <p className='text-muted-foreground mb-8'>{tag.description}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {tag.articles.map((article) => (
          <NewsArticle key={article.slug} {...article} />
        ))}
      </div>
    </div>
  );
}
