import { Access } from 'payload'
import { User } from '../payload-types'

export const isEditorOrAbove: Access<User> = ({ req: { user } }) => {
    // Need to be logged in
    if (user) {
        // If user is editor or admin, return true
        if(user?.roles?.includes('editor') || user?.roles?.includes('admin')) {
            return true;
        }
    }
    // If not logged in, return false
    return false;
}
