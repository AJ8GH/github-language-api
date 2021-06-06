export default class GithubDataParser {
  parse (data) {
    const languages = data.map(repo => repo.language)
    const filteredLanguages = this._filterNulls(languages)
    const languageCount = this._countLanguages(filteredLanguages)
    const languageCountArray = this._createCountArray(languageCount)
    return this._sortByFavourite(languageCountArray)
  }

  _countLanguages (languages) {
    return languages.reduce((obj, item) => {
      obj[item] = (obj[item] || 0) + 1
      return obj
    }, {})
  }

  _createCountArray (languages) {
    const countArray = []
    for (const language in languages) {
      const obj = { language: language, count: languages[language] }
      countArray.push(obj)
    }
    return countArray
  }

  _filterNulls (languages) {
    return languages.filter(language => language !== 'null')
  }

  _sortByFavourite (languages) {
    return languages.sort((a, b) => (a.count < b.count) ? 1 : -1)
  }
}
