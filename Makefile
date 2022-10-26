bash:
	docker-compose exec nest-api sh

start:
	docker-compose up

stop:
	docker-compose stop

build:
	docker-compose build --no-cache
