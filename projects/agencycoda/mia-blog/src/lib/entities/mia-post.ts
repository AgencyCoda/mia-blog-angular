import { MiaComment } from "./mia-comment";

export class MiaPost {

    static STATUS_DRAFT = 0;
    static STATUS_PUBLISHED = 1;
    static STATUS_CANCELLED = 2;

    id = 0;
    title = '';
    slug = '';
    content = '';
    summary = '';
    is_featured = 0;
    language_id?: number;
    status = 0;
    photo_featured = '';
    photo_featured_mobile = '';
    created_at = '';

    comments_count?: number = 0;
    comments?: Array<MiaComment>;
}
