FROM node:20-bookworm

WORKDIR /fng

COPY package*.json ./
RUN npm install

STOPSIGNAL SIGKILL

COPY . .

CMD [ "./start.sh" ]
