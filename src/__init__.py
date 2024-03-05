from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager
from flask_marshmallow import Marshmallow

DB_NAME = "database.db"

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hjshjhdjah kjshkjdhjs'
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
db = SQLAlchemy(app)
db.init_app(app)
ma = Marshmallow(app)



def create_app():
    

    ''' from WebApp-Project TODO: remove or implement?
    from .views import views

    app.register_blueprint(views, url_prefix='/')
    '''
    from .models import Player

    with app.app_context():
        db.create_all()
    
    

    return app


def create_database(app):
    if not path.exists('website/' + DB_NAME):
        db.create_all(app=app)
        print('Created Database!')