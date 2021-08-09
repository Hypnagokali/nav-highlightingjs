/**
 *
 * @param url String der vollständigen URL
 * @return pfad der gegebenen URL
 */
function pathname(url) {
    if (typeof url !== 'string') {
        throw new Error('url muss vom Typ String sein');
    }

    const urlObj = new URL(url);

    return urlObj.pathname;
}

const navElements = document.querySelectorAll('[data-nav]');

if (navElements) {
    navElements.forEach(el => {
        if ((pathname(el.href) === '/' && pathname(location.href) === '/')
            || pathname(el.href) !== '/' && location.href.startsWith(el.href)) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}
