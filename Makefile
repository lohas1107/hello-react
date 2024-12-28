.PHONY: workspace

workspace:
	pnpm init

project:
	pnpm create vite

playground_path = playground
include playground/Makefile