import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { TrackModule } from "./track/track.module";

@Module({
	imports: [
		MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.mslgowi.mongodb.net/?retryWrites=true&w=majority"),
		TrackModule
	],
})
export class AppModule { }