import { render, screen } from '@testing-library/react'
import Users from '@/components/users/Users'
import { server } from '@/mocks/server'
import { rest } from 'msw'

describe('Users', () => {
    test('renders correctly', () => {
        render(<Users />)
        const textElement = screen.getByRole('heading', {
            name: 'Users',
        })
        expect(textElement).toBeInTheDocument()
    })

    test('reders a list of users', async () => {
        render(<Users />)
        const users = await screen.findAllByRole('listitem')
        expect(users).toHaveLength(2)
    })

    test('renders error', async () => {
        server.use(
            rest.get(
                'https://jsonplaceholder.typicode.com/users',
                (req, res, ctx) => {
                    return res(ctx.status(500))
                },
            ),
        ) // mockのリクエストを使うように設定（handlerを上書き）。http status 200と500の両方の場合をテストするため
        render(<Users />)
        const error = await screen.findByText('Error')
        expect(error).toBeInTheDocument()
    })
})
