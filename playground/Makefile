# working directory
w ?= .

install:
	cd $(w) && pnpm i

dev: install
	cd $(w) && pnpm run dev --host

history:
	cd $(w) && pnpm install gh-pages --save-dev
