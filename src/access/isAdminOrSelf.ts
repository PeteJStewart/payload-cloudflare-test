import { Access } from 'payload'
import { User } from '../payload-types'

export const isAdminOrSelf: Access<User> = ({ req: { user } }) => {
    // Need to be logged in
    if (user) {
        // If user is admin, return true
        if(user?.roles?.includes('admin')) {
            return true;
        }
        
        // If user is not admin, return true if user is self
        return {
            id: {
                equals: user.id
            }
        }
    }
    // If not logged in, return false
    return false;
}
