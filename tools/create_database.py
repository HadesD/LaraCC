import os
import sys
import subprocess
import sqlite3

PWD = os.path.dirname(os.path.abspath(__file__))

os.chdir(PWD+'/..')

print(os.getcwd())

CWD = os.getcwd()

DIST = 'Dependencies/database/db.sqlite3'
sqlScripts = [
  'storage/database/sqls/db.sql', # Create database
  'storage/database/seeds/articles.sql',
]

con = sqlite3.connect(DIST)
cur = con.cursor()

for src in sqlScripts:
  f = open(src)
  str = f.read()
  cur.executescript(str)
  f.close()

con.close()
