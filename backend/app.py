from fastapi import FastAPI


app = FastAPI(title="Frag Nikogenia API",
              description="backend of an online latin-german dictionary",
              version="1.0",
              contact={"name": "Nikolas Beyer",
                       "url": "https://www.nikogenia.de",
                       "email": "frag@nikogenia.de"},
              license_info={"name": "MIT License",
                            "url": "https://mit-license.org/"})


@app.get("/list")
def route_list():
    return {"Hello": "World"}


@app.get("/search")
def route_search(q: str | None = None):
    return {"query": q}
