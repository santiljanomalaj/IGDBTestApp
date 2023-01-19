import { fireEvent, render, screen } from '@testing-library/react'
import Ranking from '@/pages/ranking'

describe('ranking page', () => {
    it('loading', () => {
        render(<Ranking />);

        const btnRefresh = screen.getByRole('button', {
            name: 'refresh'
        });

        expect(btnRefresh).toBeInTheDocument();

        const labelRanking = screen.getByText('Crypto Currency Updates');
        
        expect(labelRanking).toBeInTheDocument();

        fireEvent.click(btnRefresh);

        const labelBitcoin = screen.getByText('Bitcoin', 3000);
        
        expect(labelBitcoin).toBeInTheDocument();
    })
})