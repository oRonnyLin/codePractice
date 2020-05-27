const numProducts = 5
const repository = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad']
const customerQuery = 'mouse'

/*
1. Build a Trie using Object. Each property of the object is an alphabet and there is an additional property word.
2. For each query, go through the trie to find all the words, sort them and return the first 3.
*/
function buildTrie (strings) {
  const trie = {}
  function buildTrieHelper (node, string, index) {
    if (index === string.length) {
      node.word = string
      return
    }
    const char = string.charAt(index)
    if (!node[char]) {
      node[char] = {}
    }
    buildTrieHelper(node[char], string, index + 1)
  }
  for (let i = 0; i < strings.length; i++) {
    buildTrieHelper(trie, strings[i], 0)
  }
  return trie
}
function fetchAllWords (trie, suggestions) {
  if (trie.word) {
    suggestions.push(trie.word)
  }
  Object.keys(trie).forEach((key) => {
    if (key === 'word') return
    fetchAllWords(trie[key], suggestions)
  })
}
function findSuggestions (numProducts, repository, customerQuery) {
  const trie = buildTrie(repository)
  const result = []

  let trieBegin = trie[customerQuery.charAt(0)][customerQuery.charAt(1)]
  let index = 1
  while (index < customerQuery.length) {
    if (trieBegin) {
      const suggestions = []
      fetchAllWords(trieBegin, suggestions)
      const sorted = suggestions.sort((a, b) => { return a.localeCompare(b) })
      const suggestion = sorted.length > 3 ? sorted.slice(0, 3) : sorted
      result.push(suggestion)
      index++
      trieBegin = trieBegin[customerQuery.charAt(index)]
    }
  }
  return result
}
