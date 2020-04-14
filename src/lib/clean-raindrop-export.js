/**
 * Removes orphaned tags from Raindrop's HTML export.
 * @param {String} htmlContents The HTML content of a Raindrop export.
 */
export default function(htmlContents) {
  return htmlContents.replace(/<DT>/g, '').replace(/<p>/g, '');
}
