import os
import subprocess
import time
from shutil import copyfile

PWD = os.path.dirname(os.path.abspath(__file__))

CWD = os.getcwd()

BUILD_DIR = PWD + '/../bin'
REPO_DIR = BUILD_DIR + '/Release'

# Copy files
copyfile(PWD + '/heroku/package.json', REPO_DIR + '/package.json')
copyfile(PWD + '/heroku/Procfile', REPO_DIR + '/Procfile')

subprocess.call([
  'git',
  'init'
], cwd=REPO_DIR)

time.sleep(1)

subprocess.call([
  'heroku',
  'git:remote',
  '-a',
  'hadesd'
], cwd=REPO_DIR)

subprocess.call([
  'git',
  'status'
], cwd=REPO_DIR)

time.sleep(1)

subprocess.call([
  'git',
  'add',
  '.'
], cwd=REPO_DIR)

time.sleep(1)

subprocess.call([
  'git',
  'commit',
  '-m',
  '"Deploy Heroku"'
], cwd=REPO_DIR)

time.sleep(1)

print('Username: blank')
print('Password: ')
subprocess.call([
  'heroku',
  'auth:token'
], cwd=REPO_DIR)

subprocess.call([
  'git',
  'push',
  'heroku',
  'master',
  '-f'
], cwd=REPO_DIR)

