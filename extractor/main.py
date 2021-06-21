from database import Connector
from extract import extract
import os
credentials = "dbname={} user={} password={} host={}".format(os.environ["DB_NAME"],os.environ["DB_USERNAME"],os.environ["DB_PASSWORD"],os.environ["DB_HOSTNAME"])
db = Connector(credentials)
extract(db,10) #Change to -1 to extract all the players
