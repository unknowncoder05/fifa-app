
import psycopg2

'''
import pandas as pd
def queryDF(cursor, query):
    cursor.execute(query)
    data = cursor.fetchall()
    return pd.DataFrame(data, columns=[t[0] for t in cursor.description])


def queryDict(cursor, query):
    cursor.execute(query)
    data = cursor.fetchall()
    return [{col[0]: row[i] for i, col in enumerate(cursor.description)} for row in data]
'''


class PGConnector:
    subs = None
    django_app = "api"

    def __init__(self, credentials):
        self.postgres_connection(credentials)

    def postgres_connection(self, credentials):
        self.conn = psycopg2.connect(credentials)
        self.cursor = self.conn.cursor()

    def new_players(self, players):
        query = f'''INSERT INTO {self.django_app}_player 
        (name, position, nation, team)
        VALUES (%s, %s, %s, %s);'''
        self.cursor.executemany(query, players)
        self.conn.commit()
