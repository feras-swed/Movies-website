import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
  // أضف لغات أخرى هنا...
};

export const getDictionary = async (locale) => {
  const dictionary = dictionaries[locale];
  if (!dictionary) {
    const dictionary1 = dictionaries["en"];
    return dictionary1();
  } //لغة غير موجودة، إرجاع كائن فارغ
  return dictionary();
};
