class APICatalog {
  public _catalogUrl: string
  constructor() {
    this._catalogUrl =
      process.env.REACT_APP_COMMON_API_CATALOG ||
      'https://raw.githubusercontent.com/dataware-tools/catalog/master/api.json'

    this.loadCatalog()
  }

  private loadCatalog() {
    fetch(this._catalogUrl)
      .then((res) => res.json())
      .then((out) => {
        Object.keys(out).forEach((key: string) => {
          this[key] = out[key]
        }, this)
      })
      .catch((err) => {
        throw err
      })
  }
}

export const API_CATALOG = new APICatalog()
