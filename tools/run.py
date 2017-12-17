import subprocess

subprocess.call([
  'WebApp',
  '-c',
  'config.json',
  '--service-port',
  8080
], cwd='../Build/Bin')
