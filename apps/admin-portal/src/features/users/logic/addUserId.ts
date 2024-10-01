import { UserResponse } from '@/features';

export const addUserId = (user: UserResponse) => ({ id: user.user_email, ...user });
