/**
 * Parses the Raindrop export to JSON.
 * @param {String} htmlContents The HTML content of a Raindrop export.
 */
export default function(htmlContents) {
  if (!htmlContents) {
    return undefined;
  }
  const doc = new DOMParser().parseFromString(htmlContents, 'text/html');
  return doc;
}
