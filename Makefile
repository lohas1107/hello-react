.PHONY: workspace

workspace:
	pnpm init

project:
	pnpm create vite

dir ?= ec-portal
include $(dir)/Makefile