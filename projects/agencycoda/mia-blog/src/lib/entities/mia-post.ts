import { MiaComment } from "./mia-comment";

export class MiaPost {

    static STATUS_DRAFT = 0;
    static STATUS_PUBLISHED = 1;
    static STATUS_CANCELLED = 2;

    static VISIBILITY_NOT_PUBLIC = 0;
    static VISIBILITY_PUBLIC = 1;

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
    parent_id?: number;
    creator_id?: number;
    seo_title = '';
    seo_description = '';
    seo_keywords = '';
    visibility = 0;
    featured_ord = 0;

    comments_count?: number = 0;
    comments?: Array<MiaComment>;
}
