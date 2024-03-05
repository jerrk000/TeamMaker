from flask import Blueprint, request, jsonify
from ..database.models import Player
from .. import db
from ..database.schema import PlayerSchema

test_routes = Blueprint('test_routes', __name__)

player_schema = PlayerSchema()
players_schema = PlayerSchema(many=True)

@test_routes.route('/', methods = ['GET'])
def test_output():
    return jsonify({'Hello': 'World'})

@test_routes.route('/insert_db', methods = ['GET'])
def test_database():

    player1 = Player(name='Jerry1')
    db.session.add(player1)
    db.session.commit()

    players = Player.query.all()
    print(players)

    player2 = Player(name='Jerry2')
    db.session.add(player2)
    db.session.commit()

    players = Player.query.all()
    print(players)

    return player_schema.jsonify(player2)