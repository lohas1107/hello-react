playground_path ?= .

install:
	cd $(playground_path) && \
	pnpm i

dev: install
	cd $(playground_path) && \
	pnpm run dev --host

deploy:
	cd $(playground_path) && \
	pnpm run deploy

history:
	cd $(playground_path) && \
	pnpm install gh-pages --save-dev
