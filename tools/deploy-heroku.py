import os
import subprocess
import time

PWD = os.path.dirname(os.path.abspath(__file__))

os.chdir(PWD+'/..')

print(os.getcwd())

CWD = os.getcwd()

BUILD_DIR = os.getcwd() + '/Build'

# subprocess.Popen([
#   'make',
#   'build'
# ], cwd=CWD)
#
# time.sleep(2)

f = open(BUILD_DIR + '/.gitignore', 'r')
r = f.read()
f.close()
f = open(BUILD_DIR + '/.gitignore', 'w')
f.write(
  r
  + '\n'
  + '!/Bin\n'
  + '!/Bin/Release\n'
  + '!/Bin/Release/**\n'
)
f.close()

time.sleep(2)

subprocess.Popen([
  'git',
  'status'
], cwd=CWD)

time.sleep(5)

subprocess.Popen([
  'git',
  'add',
  '.'
], cwd=CWD)

time.sleep(5)

subprocess.Popen([
  'git',
  'commit',
  '-m',
  '"Deploy Heroku"'
], cwd=CWD)

time.sleep(2)

subprocess.call([
  'git',
  'push',
  'heroku',
  'master',
  '-f'
], cwd=CWD)

