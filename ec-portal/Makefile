dir ?= .

install:
	cd $(dir) && \
	pnpm i

dev: install
	cd $(dir) && \
	pnpm run dev --host

deploy:
	cd $(dir) && \
	pnpm run deploy

history:
	cd $(dir) && \
	pnpm install gh-pages --save-dev
