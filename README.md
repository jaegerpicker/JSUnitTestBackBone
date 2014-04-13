JSUnitTestBackBone
==================

Sample repo for unit testing backbone.js with Mocha, Chai, Sinon, and testem

This app has a django framework included just for ease of use in running it.
==================
Setup (for Unix based systems):
git clone http://github.com/jaegerpicker/JSUnitTestBackBone
virtualenv ~/.virtualenvs/JSUnitTestBackBone
source ~/.virtualenvs/JSUnitTestBackBone/bin/activate
cd JSUnitTestBackBone
pip install -r requirements.txt
npm install
bower install

to run the (JS tests):
testem
browse to the address shown in the terminal

To run the app:
cd sample
./manage.py runserver
browse to http://localhost:8000


As of right the app is only showing unit tests and has very little actual functionality.
