const trTRLocales = {
    Stores: () => "Mağazalar",
    Home: () => "Ana Sayfa",
    Purchases: () => "Satın Alımlar",
    Sales: () => "Satışlar",
    Profile: () => "Profil",
    Menu: () => "Menü",
    Search: () => "Ara",
    Payment: () => "Ödeme",
    Orders: () => "Siparişler",
    Tables: () => "Masalar",
}

const languageKeys = ["tr"]

const exportLocales = (languageKeys, languages) => {
    const exp = {};
    languageKeys.forEach(i => {
        exp[i] = languages;
    })
    return exp;
}

export default exportLocales(languageKeys, trTRLocales);
