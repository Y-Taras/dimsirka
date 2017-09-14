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
  const extractedPath = path
    .split('/')
    .slice(2)
    .join('/');

  switch (newLang) {
    case 'uk':
      return `/${newLang}/${extractedPath}`;
    case 'en':
    case 'ru':
      return oldLang === 'uk' ? `/${extractedPath}/` : `/${newLang}/${extractedPath}`;
    default:
      return '/nowhere';
  }
}
