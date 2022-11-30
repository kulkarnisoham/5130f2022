import os
basedir = os.path.abspath(os.path.dirname(__file__))

db_URI = os.getenv('DATABASE_URL') or 'sqlite:///' + \
    os.path.join(basedir, 'app.db')
secret = os.getenv('SECRET', 'Oh my god they were roommates.')


class Config(object):
    SECRET_KEY = 'ljahsdbfahbdflhabdc9uluasdhbfkuahsbdfkhlabs'
    API_KEY = os.environ.get('API_KEY')
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_SERVER = os.environ.get('MAIL_SERVER')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS')
    MAIL_PORT = os.environ.get('MAIL_PORT')

    db_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
