import sys
import os

# Add project directory to path for PythonAnywhere WSGI
sys.path.insert(0, os.path.dirname(__file__))

from app import app as application  # noqa: F401 — PythonAnywhere expects 'application'
