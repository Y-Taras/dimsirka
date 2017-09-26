export function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}
export function switchLangHepler(oldLang, newLang, path) {
  const extractedPath = n =>
    path
      .split('/')
      .slice(n)
      .join('/');
  switch (newLang) {
    case 'uk':
      return `/${extractedPath(2)}`;
    case 'en':
    case 'ru':
      return oldLang === 'uk' ? `/${newLang}/${extractedPath(1)}` : `/${newLang}/${extractedPath(2)}`;
    default:
      return '/nowhere';
  }
}
// function that checks two arrays without duplicates
export function checkDuplicates(array1, array2) {
  return array1.filter(obj => obj.id === array2[0].id).length;
}
