export default function getLastUrlSegment(url: string) :string {
  url = url.substring(0, url.length - 1);
  return url.substring(url.lastIndexOf('/')).slice(1)
}