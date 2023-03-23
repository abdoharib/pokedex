export default function getOffsetFromUrl (url:string) {
    return parseInt(url.split('offset=')[1].split('&',1)[0])
}