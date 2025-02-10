from flask import Blueprint, request, jsonify
import uuid
from werkzeug.security import generate_password_hash
from ..database.models import Player
from .. import db
from ..database.schema import PlayerSchema

test_routes = Blueprint('test_routes', __name__)

player_schema = PlayerSchema()
players_schema = PlayerSchema(many=True)

@test_routes.route('/', methods = ['GET'])
def test_output():
    return jsonify({'name': 'TESTTESTWorld'})

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

@test_routes.route('/register_player', methods = ['GET'])
def register_player():
    """
    data = request.get_json()

    # Extract the fields from the request
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400
    """
    password = "testtesttest123"

    # Generate a unique friend-key using UUID
    friend_key = str(uuid.uuid4())

    # Hash the password before storing it
    hashed_password = generate_password_hash(password)

    player1 = Player(name='Jerry1', password_hash = hashed_password, friendcode = friend_key)
    db.session.add(player1)
    db.session.commit()

    players = Player.query.all()
    print(players)

    player2 = Player(name='Jerry2', password_hash = hashed_password, friendcode = friend_key)
    db.session.add(player2)
    db.session.commit()

    players = Player.query.all()
    print(players)

    return player_schema.jsonify(player2)
