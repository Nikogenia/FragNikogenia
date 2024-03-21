import sys
import uvicorn


def main():
    uvicorn.run("app:app", host="0.0.0.0", port=8080, reload="-r" in sys.argv or "--reload" in sys.argv)


if __name__ == "__main__":
    main()
