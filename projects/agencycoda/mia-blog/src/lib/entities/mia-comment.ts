import { MiaUser } from "@agencycoda/mia-auth";

export class MiaComment {
    id = 0;
    post_id = 0;
    user_id = 0;
    content = '';
    status = 0;
    created_at = '';

    user?: MiaUser;
}
