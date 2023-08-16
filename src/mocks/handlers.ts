import { rest } from 'msw'
import { billerMockData } from './data/biller'

export const handlers = [
    // Handles a GET /biller request
    rest.get(`${process.env.REACT_APP_API_BASE_URL}/admin/mocks/biller`, (req, res,ctx) => {
        return res(
        ctx.status(200),
            ctx.json({
                data: billerMockData,
            }),
          )
    }),
  ]