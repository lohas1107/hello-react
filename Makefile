.PHONY: workspace

workspace:
	pnpm init

project:
	pnpm create vite

w = playground
include playground/Makefile