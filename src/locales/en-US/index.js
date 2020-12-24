const enUSLocales = {
    Stores: () => "Stores",
    Home: () => "Home",
}
const languageKeys = ["en", "en-us"]

const exportLocales = (languageKeys, languages) => {
    const exp = {};
    languageKeys.forEach(i => {
        exp[i] = languages;
    })
    return exp
}

export default exportLocales(languageKeys, enUSLocales);
