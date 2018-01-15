class Url
{
  constructor(db)
  {
    this.db = db;
    this.revDb = new Map(db);
  }

  /**
   * @param {string} spec
   */
  findOne( spec ) { return this.db.get(spec); }

  findById( id ) { return this.findOne( id ); }
  findByUrl( id ) { return this.findById( id ); }

  findByShortUrl( id ) { return this.revDb.get( String(id) ); }

  add( url )
  {
    this.db.set(url, String(this.db.size + 1) );
    const short = this.findById( url );
    this.revDb.set(short, url);
    return short;
  }
}

module.exports = new Url(new Map);
