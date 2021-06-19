from database import Connector
import os
credentials = "dbname={} user={} password={} host={}".format(
    os.environ["DB_NAME"], os.environ["DB_USER"], os.environ["DB_PASSWORD"], os.environ["DB_HOST"])

db = Connector(credentials)
db.new_players((
    (
        "1",
        "LB",
        "Colombia2",
        "team"
    ),
)
)
