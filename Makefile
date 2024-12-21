workspace:
	pnpm init

project:
	pnpm create vite

WORKING_DIRECTORY:=playground

install:
	cd $(WORKING_DIRECTORY) && \
	pnpm i

dev: install
	cd $(WORKING_DIRECTORY) && \
	pnpm run dev --host

.PHONY: workspace