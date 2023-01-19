import { fireEvent, render, screen } from '@testing-library/react'
import SignUp from '@/pages/signup'

describe('sigup page', () => {
    it('loading', () => {
        render(<SignUp />);

        const btnSignup = screen.getByRole('button', {
            name: 'SIGN UP'
        });

        expect(btnSignup).toBeInTheDocument();

        const linkSignIn = screen.getByRole('link', {
            name: 'Sign In'
        });

        expect(linkSignIn).toBeInTheDocument();

        const inputFirstName = screen.getByPlaceholderText('First Name');

        expect(inputFirstName).toBeInTheDocument();

        const inputLastName = screen.getByPlaceholderText('Last Name');

        expect(inputLastName).toBeInTheDocument();

        const inputEmailbox = screen.getByPlaceholderText('Enter Your Email');

        expect(inputEmailbox).toBeInTheDocument();

        const inputPassword = screen.getByPlaceholderText('*******')

        expect(inputPassword).toBeInTheDocument();

        fireEvent.change(inputFirstName, {target: {value: 'www'}});

        fireEvent.change(inputLastName, {target: {value: 'eee'}});

        fireEvent.change(inputEmailbox, {target: {value: 'www@eee.com'}});

        fireEvent.change(inputPassword, {target: {value: '123qwe~~~'}});

        fireEvent.click(btnSignup);

        const labelSignin = screen.getByText('Sign in', 3000);
        
        expect(labelSignin).toBeInTheDocument();
    })
})