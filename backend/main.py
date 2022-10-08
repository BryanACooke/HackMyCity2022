import pprint
from pymongo import MongoClient
from bson import json_util


DB_NAME = 'InsideTheGradebook'
COLLECTION_NAME = 'Students'


# dbname = get_database(DB_NAME)

client = MongoClient("mongodb://127.0.0.1:27017/:27017")

db = client[DB_NAME]

coll1 = db[COLLECTION_NAME] #selecting the coll1 in myDatabase
# for document in coll1.find():
#     print (document)

printer = pprint.PrettyPrinter()

def find_all_students():
     students = coll1.find() 

     for student in students:
         printer.pprint(student)

#find_all_students()

def find_s43():
    tim = coll1.find_one({"student_id": 43, "class_id": 18})
    printer.pprint(tim)

#find_s43()

def count_all_students():
    count = coll1.count_documents(filter={})
    print(count)

# count_all_students()

