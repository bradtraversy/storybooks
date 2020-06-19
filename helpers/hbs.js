const moment = require('moment')

module.exports = {
  formatDate: function (date, format) {
    return moment(date).utc().format(format)
  },
}
