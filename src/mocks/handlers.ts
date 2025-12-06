import { rest } from 'msw'

export const handlers = [
    rest.get(
        'https://jsonplaceholder.typicode.com/users', // モックするAPIのURL。httpリクエストでhttps://jsonplaceholder.typicode.com/usersが呼ばれた場合に第二引数のresをreturnする
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([{ name: 'John Doe' }, { name: 'Test' }]),
            )
        },
    ),
]
