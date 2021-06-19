import requests


def process_players(res, db, names=[]):
    players = []
    for x in res["items"]:
        if x["name"] not in names:
            names.append(x["name"])
            players.append((x["name"], x["position"],
                           x["nation"]["name"], x["club"]["name"]))
    print(players[0][0])
    db.new_players(players)
    return names


def extract(db, limit=1):
    res = requests.get(BASE_URL+"/fifa/ultimate-team/api/fut/item").json()
    names = process_players(res, db)

    total_pages = res["totalPages"] if limit == -1 else limit
    for i in range(2, total_pages+1):
        res = requests.get(
            BASE_URL+"/fifa/ultimate-team/api/fut/item", params={"page": i}).json()
        names = process_players(res, db, names)


BASE_URL = "https://www.easports.com"
