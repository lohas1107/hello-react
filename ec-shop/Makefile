dir ?= .

install:
	cd $(dir) && \
	pnpm i

dev: install
	cd $(dir) && \
	pnpm run dev --host

predeploy:
	cd $(dir) && \
	pnpm run predeploy

deploy: predeploy
	cd $(dir) && \
	pnpx gh-pages -d dist -r git@github.com:yarrtech/ec-shop.git
