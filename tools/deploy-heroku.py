import os
import subprocess

PWD = os.path.dirname(os.path.abspath(__file__))

os.chdir(PWD+'/..')

print(os.getcwd())

CWD = os.getcwd()

BUILD_DIR = os.getcwd() + '/Build'

f = open(BUILD_DIR + '/.gitignore', 'r')
r = f.read()
f.close()
f = open(BUILD_DIR + '/.gitignore', 'w')
f.write(
  r
  + '/Bin\n'
  + '/Bin/**'
)
f.close()

subprocess.Popen([
  'git',
  'status'
], cwd=CWD)

subprocess.Popen([
  'git',
  'add',
  '.'
], cwd=CWD)

subprocess.Popen([
  'git',
  'commit',
  '-m',
  '"Deploy Heroku"'
], cwd=CWD)

subprocess.call([
  'git',
  'push',
  'heroku',
  'master',
  '-f'
], cwd=CWD)

