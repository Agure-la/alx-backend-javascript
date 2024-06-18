/**
 * Contains the miscellaneous route handlers.
 * @author Agure <https://github.com/Agure-la>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
