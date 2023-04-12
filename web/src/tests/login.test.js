import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LayoutLogin from './LayoutLogin';

test('show error message on failed login', async () => {
    const { getByLabelText, getByText, queryByText } = render(<LayoutLogin />);

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidPassword' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
        expect(queryByText('Invalid email or password')).toBeInTheDocument();
    });
});