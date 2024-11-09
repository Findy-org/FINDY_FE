export const parseCategory = (categoryName: string) => {
  if (categoryName.includes('식')) {
    return 'restaurant';
  }
  if (categoryName.includes('카페') || categoryName.includes('디저트')) {
    return 'cafe';
  }
  if (categoryName.includes('술집')) {
    return 'bar';
  }
  if (categoryName.includes('쇼핑') || categoryName.includes('유통')) {
    return 'shopping';
  }
  if (categoryName.includes('여행') || categoryName.includes('명소')) {
    return 'travel';
  }
  if (categoryName.includes('공공') || categoryName.includes('사회')) {
    return 'public';
  }
  if (categoryName.includes('병원') || categoryName.includes('의원')) {
    return 'hospital';
  }

  return 'other';
};
