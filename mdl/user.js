class User
{
  constructor(db) {
    this.db = db;
  };

  findOne( spec )
  {
  }

  findById( id )
  {
    return this.findOne( { id });
  }
}

module.exports = new User({});