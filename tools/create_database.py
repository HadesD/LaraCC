import os
import sys
import subprocess
import sqlite3

PWD = os.path.dirname(os.path.abspath(__file__))

os.chdir(PWD+'/..')

print(os.getcwd())

CWD = os.getcwd()

DIST = 'Build/Bin/db.sqlite3'
sqlScripts = [
  'storage/database/sqls/db.sql', # Create database
  'storage/database/seeds/articles.sql',
]

print('Deleting ' + DIST)
if os.path.isfile(DIST):
  os.remove(DIST)

con = sqlite3.connect(DIST)
cur = con.cursor()

for src in sqlScripts:
  print('Importing ' + src)
  f = open(src)
  str = f.read()
  cur.executescript(str)
  f.close()

con.close()

