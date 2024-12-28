playground_path ?= .

install:
	cd $(playground_path) && \
	pnpm i

dev: install
	cd $(playground_path) && \
	pnpm run dev --host

history:
	cd $(playground_path) && \
	pnpm install gh-pages --save-dev
