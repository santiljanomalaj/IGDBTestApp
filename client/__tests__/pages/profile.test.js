import { fireEvent, render, screen } from '@testing-library/react'
import Profile from '@/pages/profile'

describe('profile page', () => {
    it('loading', () => {
        render(<Profile />);

        const btnSignout = screen.getByRole('button', {
            name: 'Logout'
        });

        expect(btnSignin).toBeInTheDocument();

        const linkSignUp = screen.getByRole('link', {
            name: 'Sign Up'
        });

        const labelHome = screen.getByText('Home - Client Side Auth');
        
        expect(labelHome).toBeInTheDocument();

        const detailUser = screen.getByText('User Details');
        
        expect(detailUser).toBeInTheDocument();
        
        fireEvent.click(btnSignout);

        const labelSignin = screen.getByText('Sign in', 3000);
        
        expect(labelSignin).toBeInTheDocument();
    })
})