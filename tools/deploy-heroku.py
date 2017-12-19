import os
import subprocess

PWD = os.path.dirname(os.path.abspath(__file__))

os.chdir(PWD+'/..')

print(os.getcwd())

BUILD_DIR = os.getcwd() + '/Build'

f = open(BUILD_DIR + '/.gitignore', 'r')
r = f.read()
f.close()
f = open(BUILD_DIR + '/.gitignore', 'w')
f.write(
  r
  + '/Bin'
  + '/Bin/**'
)
f.close()

subprocess.call([
  'git',
  'add',
  '.',
], cwd=PWD)

subprocess.call([
  'git',
  'commit',
  '-m',
  '"Deploy Heroku"'
], cwd=PWD)

subprocess.call([
  'git',
  'push',
  'heroku',
  'master'
], cwd=PWD)

