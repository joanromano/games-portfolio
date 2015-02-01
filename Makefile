default: build

build:
	ember build --environment=local
push:
	git push
	divshot push