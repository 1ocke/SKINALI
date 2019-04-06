const normalizeUrl = (url) => {
    if (url.startsWith('https://')) {
        return url;
    } else {
        return 'https://' + url;
    }
};

normalizeUrl('yandex.ru');