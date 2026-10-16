export const BASE_PATH = "/nb-archive";
export function publicPath(path: string): string {
  return path.startsWith("/") && !path.startsWith("//") && !path.startsWith(BASE_PATH + "/") ? BASE_PATH + path : path;
}
export function withoutBasePath(path: string): string {
  return path.startsWith(BASE_PATH + "/") ? path.slice(BASE_PATH.length) : path;
}
