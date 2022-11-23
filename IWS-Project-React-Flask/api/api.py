import time
from flask import Flask

api = Flask(__name__)

@api.route('/', methods=['GET'])
def hello_world():
    return {'id1':'orange', 'id2':'apple'}

if __name__ == '__main__':
    api.run(debug=True)