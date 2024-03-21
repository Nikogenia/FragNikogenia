FROM python:3.12-bookworm

WORKDIR /fng

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

STOPSIGNAL SIGINT

COPY . .

CMD [ "./start.sh" ]
