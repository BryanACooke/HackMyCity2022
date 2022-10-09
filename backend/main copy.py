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
     students = coll1.find() 

     for student in students:
         printer.pprint(student)

# find_all_students()

def find_s43():
    tim = coll1.find_one({"StudentID": 43, "ClassID": 18, })
    printer.pprint(tim)

#find_s43()

def count_all_students():
    count = coll1.count_documents(filter={})
    print(count)

#count_all_students()

# def get_score_range(min_score, max_score):
#    # query = coll1.find({"scores": {"score": 87.50309579619501}})

        
#     # query = {"$and": [
#     #     {"score": {"$gte": min_score}},
#     #     {"score": {"$lte": max_score}}
#     # ]}
#     # print("x")
#     # students = coll1.find(query).sort("score") 
#     # print("2")
#     # for studen:
#     #     printer.pprint(student)
#         # print("1")
    
# get_score_range(1.0,100.0)

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

#get student average score

def get_scores():
    student_id = 1
    pipeline =  [
        {
            "$match": {
                "StudentID": student_id, "ClassID": 4
            }
        }
    ]
    grades = db.coll_s.aggregate(pipeline)
    print("x")
    for itr in grades:
        print("y")
        print(itr)   
    pipeline = [{'$lookup': 
                    {'from' : 'models',
                    'localField' : '_id',
                    'foreignField' : 'references',
                    'as' : 'cellmodels'}},
                {'$unwind': '$cellmodels'},
                {'$match':
                    {'authors' : 'Migliore M', 'cellmodels.celltypes' : 'Hippocampus CA3 pyramidal cell'}},
                {'$project': 
                    {'authors':1, 'cellmodels.celltypes':1}} 
                ]

for doc in (papers.agg

    
])

    # grades = coll_g.find({"scores", "class_id": class_id})
    # print("1")
    # for itr in grade
    #     print(itr)    

get_scores()

#get student's performance level: on track/needs attention
def get_student_status():
    pass

#generating student report

def print_student_report():
    pass

