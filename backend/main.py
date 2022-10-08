from pymongo import MongoClient
from bson import json_util


DB_NAME = 'InsideTheGradebook'
COLLECTION_NAME = 'Students'


# dbname = get_database(DB_NAME)

client = MongoClient("mongodb://127.0.0.1:27017/:27017")

db = client[DB_NAME]

coll1 = db[COLLECTION_NAME] #selecting the coll1 in myDatabase
for document in coll1.find():
    print (document)