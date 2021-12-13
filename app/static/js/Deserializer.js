export default class Deserializer {
  deserialize (data) {
    const filteredRepos = this._filterNulls(data)
    if (filteredRepos.length === 0) return

    const languages = filteredRepos.map(repo => repo.language)
    const languageCount = this._countLanguages(languages)
    const languageCountArray = this._createCountArray(languageCount)
    return this._sortByFavourite(languageCountArray)
  }

  _countLanguages (languages) {
    return languages.reduce((obj, item) => {
      obj[item] = (obj[item] || 0) + 1
      return obj
    }, {})
  }

  _createCountArray (languageCount) {
    const countArray = []
    for (const language in languageCount) {
      countArray.push({ language: language, count: languageCount[language] })
    }
    return countArray
  }

  _filterNulls (repos) {
    return repos.filter(repo => repo.language !== null)
  }

  _sortByFavourite (languages) {
    return languages.sort((a, b) => (a.count < b.count) ? 1 : -1)
  }
}
