import { fireEvent, render, screen } from '@testing-library/react'
import Signin from '@/pages/signin'

describe('sigin page', () => {
    it('loading', () => {
        render(<Signin />);

        const btnSignin = screen.getByRole('button', {
            name: 'SIGN IN'
        });

        expect(btnSignin).toBeInTheDocument();

        const linkSignUp = screen.getByRole('link', {
            name: 'Sign Up'
        });

        expect(linkSignUp).toBeInTheDocument();

        
        const inputEmailbox = screen.getByPlaceholderText('Enter Your Email')

        expect(inputEmailbox).toBeInTheDocument();

        const inputPassword = screen.getByPlaceholderText('*******')

        expect(inputPassword).toBeInTheDocument();

        fireEvent.change(inputEmailbox, {target: {value: 'eee@www.com'}});

        fireEvent.change(inputPassword, {target: {value: '123qwe~~~'}});

        fireEvent.click(btnSignin);

        const labelHome = screen.getByText('Home - Client Side Auth', 3000);
        
        expect(labelHome).toBeInTheDocument();
    })
})