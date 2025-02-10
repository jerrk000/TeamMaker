"""\
All Database-models which are needed for this app

Usage:  Normally used when a new app-instance is created,
        and the database is set up for the first time
        (in __init__.py)
"""
from .. import db

class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), default = 'anonymous')
    email = db.Column(db.String(150))
    password_hash = db.Column(db.String(150))
    friendcode = db.Column(db.String(150))
    played_matches = db.Column(db.Integer, default=0)
    won_matches = db.Column(db.Integer, default=0)
    lost_matches = db.Column(db.Integer, default=0)