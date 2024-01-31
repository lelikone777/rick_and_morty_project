export function lastDigitsUrl(url: string): string {
    const digitsAfterLastSlash = url.match(/\/(\d+)$/);
    return digitsAfterLastSlash ? digitsAfterLastSlash[1] : '';
}
