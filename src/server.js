import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import session from 'express-session';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		session({
			secret: 'keyboard cat',
			resave: false,
			saveUninitialized: true,
			cookie: { secure: true }
		}),
		sapper.middleware({
			session: (req, res) => ({
				user: req.user
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
