import auth0 from '../../auth0Config';

export default async function logout(req, res) {
  try {
    await auth0.handleLogout(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}