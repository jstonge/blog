import { Cite, plugins } from '@citation-js/core';

export async function parseBibtexFile(filePath) {
  const response = await fetch(filePath);
  const bibtexText = await response.text();
  const citation = new Cite(bibtexText);
  return citation.format('json');
}
