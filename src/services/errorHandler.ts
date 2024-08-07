import axios from 'axios';

export const handleError = (error: unknown): never => {
    if (axios.isAxiosError(error)) {
        const message =
            error.response?.data?.message ||
            'An error occurred with your request';
        console.log('Error888:', message);
        throw new Error(message);
    } else {
        const errorMessage =
            (error as Error).message || 'An unexpected error occurred';
        console.error('Error777:', errorMessage);
        throw new Error(errorMessage);
    }
};
