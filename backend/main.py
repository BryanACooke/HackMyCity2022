import pprint
from pymongo import MongoClient
from bson import json_util


DB_NAME = 'Gradebook'
COLLECTION_STUDENTS = 'Students'
COLLECTION_GRADES = 'Grades'
COLLECTION_TEACHERS = 'Teachers'
COLLECTION_CLASSES = 'Classes'
COLLECTION_ASSIGNMENTS = 'Assignments'


# dbname = get_database(DB_NAME)

client = MongoClient("mongodb://127.0.0.1:27017/:27017")

db = client[DB_NAME]

coll_s = db[COLLECTION_STUDENTS] #selecting the students in the database
coll_g = db[COLLECTION_GRADES] #selecting the grades in the database
coll_t = db[COLLECTION_TEACHERS] #selecting the teachers in the database
coll_c = db[COLLECTION_CLASSES] #selecting the classes in the database
coll_a = db[COLLECTION_ASSIGNMENTS] #selecting the assignments in the database


# for document in coll1.find():
#     print (document)

printer = pprint.PrettyPrinter()

def find_all_students():
     students = coll_s.find() 

     for student in students:
         printer.pprint(student)

find_all_students()

def count_all_students():
    count = coll_s.count_documents(filter={})
    print(count)

#count_all_students()

class_id = 29
#Search students by class 
def search_students_by_class():
    students = coll1.find({"class_id": class_id})

    for itr in students:
        printer.pprint(itr)

#Search students by id
student_id = 45
class_id_sid = 13
#Get list of students in any specific class
def search_students_by_id():
    students = coll1.find({"student_id": student_id, "class_id": class_id_sid})

    for itr in students:
        printer.pprint(itr)

#Search students by assignment
assignment_id = 5
class_id_aid = 13
#Get list of students in any specific class
def search_students_by_assignments():
    students = coll1.find({"assignment_id": assignment_id, "class_id": class_id_aid})

    for itr in students:
        printer.pprint(itr)

#search_students_by_class()
#search_students_by_id() 
#search_students_by_assignment()


