""" 
Program 2
CIS 443-01-4228
Due: 10/23/2022 11:59PM
Grading ID: F2770
This programs has two primary functions:
    -a function that accepts a user-specified number of students and test scores as a 2-d list
    -a function that uses this data to calculate letter grade from mean test score and output as 
    a bar graph using the Seaborn library. 
"""
import statistics
import seaborn as sns

#primary function to accept user input
def input_test_scores():
    num_students = int(input("Enter number of students in class: "))
    num_tests = int(input("Enter number of tests for each student: "))
    class_scores = []
    for student in range(num_students):
        student_scores = []
        for test in range(num_tests):
            new_test_score = int(input(f"Enter Test {test} score for Student {student} (0-100): "))
            student_scores.append(new_test_score)
        class_scores.append(student_scores)
    return class_scores

#helper function for calculating letter grade
def calc_grade(avg_test_score):
    if avg_test_score >= 90:
        grade = 'A'
    elif avg_test_score >= 80:
        grade = 'B'
    elif avg_test_score >= 70:
        grade = 'C'
    elif avg_test_score >= 60:
        grade = 'D'
    else:
        grade = 'F'
    return grade

#primary function to generate bar graph 
def summarize_test_scores(test_score_list):
    grades_dict = { 'A':0, 'B':0, 'C':0, 'D':0, 'F':0 }
    for student_tests in test_score_list:
        student_avg_score = statistics.mean(student_tests)
        grade = calc_grade(student_avg_score)
        grades_dict[grade] += 1
    unique_grades = sorted(list(grades_dict.keys()))
    frequencies = [grades_dict[grade] for grade in unique_grades]
    #build graph from data
    sns.set_style('whitegrid')
    axes = sns.barplot(x=unique_grades, y=frequencies, palette='bright')
    axes.set(title='Class Letter Grades', xlabel='Letter Grade', ylabel='Frequency')

summarize_test_scores(input_test_scores())

