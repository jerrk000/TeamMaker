from flask import Blueprint, request, jsonify
#from ..database.models import Player
from .. import db

test_routes = Blueprint('test_routes', __name__)

@test_routes.route('/', methods = ['GET'])
def test_output():
    return jsonify({'Hello': 'World'})