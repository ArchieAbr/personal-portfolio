import json
import os
from flask import Flask, render_template

app = Flask(__name__)

# Absolute path to portfolio.json — works regardless of working directory
_DATA_PATH = os.path.join(os.path.dirname(__file__), "data", "portfolio.json")


def load_data() -> dict:
    """Loads portfolio data from JSON."""
    with open(_DATA_PATH, encoding="utf-8") as f:
        return json.load(f)


@app.route("/")
def index():
    """Renders the home/about page with experience and competency data."""
    data = load_data()
    return render_template(
        "index.html",
        experience=data["experience"],
        competencies=data["competencies"],
    )


@app.route("/portfolio")
def portfolio():
    """Renders the portfolio page with project data."""
    data = load_data()
    return render_template("portfolio.html", projects=data["projects"])


@app.route("/education")
def education():
    """Renders the education page with education history data."""
    data = load_data()
    return render_template("education.html", education=data["education"])


@app.route("/contact")
def contact():
    """Renders the contact page with preferred contact channels."""
    return render_template("contact.html")


if __name__ == "__main__":
    # Development server only — use wsgi.py for production
    app.run(debug=True)
