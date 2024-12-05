import { Place } from '@/types/naver';

const removeHtmlTags = (result: string) => {
  return result.replace(/<\/?[^>]+(>|$)/g, '');
};

const extractCategory = (category: string) => {
  return category.split('>')[0];
};

export const parseSearchResult = (data: Place[]) => {
  return data.map((item) => ({
    ...item,
    title: removeHtmlTags(item.title),
    category: typeof item.category === 'string' ? extractCategory(item.category) : '',
  }));
};
