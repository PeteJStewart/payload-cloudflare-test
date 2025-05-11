import { Access } from 'payload'
import { User } from '../payload-types'

export const isEditorOrPublished: Access<User> = ({ req: { user } }) => {
    // Need to be logged in
    if (user) {
        // If user is editor or admin, return true
        if(user?.roles?.includes('editor') || user?.roles?.includes('admin')) {
            return true;
        }
    }
    // If not logged in, return true if the article is published
    return {
        _status: {
            equals: 'published'
        }
    };
}
