import os
import subprocess

subprocess.call([
  'git'
  , 'submodule'
  , 'foreach'
  , 'git'
  , 'checkout'
  , 'master'
])

subprocess.call([
  'git'
  , 'submodule'
  , 'foreach'
  , 'git'
  , 'pull'
  , 'origin'
  , 'master'
])

