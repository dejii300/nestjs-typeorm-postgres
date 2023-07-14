import { CreateListingDto } from "./create-listing.dto";
import { CreateTagDto } from "./create-tagDto";

export class CreateItemDto {
	name: string;
	public: boolean;
	listing: CreateListingDto;
	tags: CreateTagDto[];
}
