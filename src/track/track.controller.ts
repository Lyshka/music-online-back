import { Controller, Get } from "@nestjs/common";

@Controller("/tracks")
export class TrackController {
	create() {

	}

	@Get()
	getAll() {
		return "1111"
	}

	getOne() {

	}

	delete() {

	}
}