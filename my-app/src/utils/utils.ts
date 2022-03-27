export const getFromUrlLastWord = (url: string): string => {
    return url.replace(/\/$/, "").split('/').splice(-1, 1)[0]
}