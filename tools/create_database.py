import os
import sys
import subprocess
import sqlite3

PWD = os.path.dirname(os.path.abspath(__file__))

os.chdir(PWD+'/..')

print(os.getcwd())

CWD = os.getcwd()

DIST = 'db.sqlite3'

DIST_DIRS = [
  'Build/Bin/Release',
  'Build/Bin/Debug'
]

sqlScripts = [
  'storage/database/sqls/db.sql', # Create database
  'storage/database/seeds/articles.sql',
]

for df in DIST_DIRS:
  if not os.path.isdir(df):
    continue

  db_fname = df + '/' + DIST
  if os.path.isfile(db_fname):
    print('Deleting ' + db_fname)
    os.remove(db_fname)

  con = sqlite3.connect(db_fname)
  cur = con.cursor()

  for src in sqlScripts:
    print('Importing ' + src)
    f = open(src)
    str = f.read()
    cur.executescript(str)
    f.close()

  con.close()

